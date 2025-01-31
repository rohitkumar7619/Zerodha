require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { PositionsModel } = require("./model/PositionsModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();
app.use(express.json()); // Middleware for JSON body parsing

// Connect to MongoDB before starting the server
async function connectDB() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1); // Stop the server if DB connection fails
  }
}

app.get("/addPosition", async (req, res) => {
  const tempPosition = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  try {
    for (const item of tempPosition) {
      const exists = await PositionsModel.findOne({ name: item.name });
      if (!exists) {
        await PositionsModel.create(item);
      }
    }
    res.send("Positions added successfully (if not already present)");
  } catch (error) {
    console.error("Error adding positions:", error);
    res.status(500).send("Error adding positions");
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
