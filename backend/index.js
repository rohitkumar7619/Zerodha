require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const { HoldingsModel } = require("./model/HoldingModel");

const { PositionsModel } = require("./model/PositionsModel");

const { ordersModel, OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', require('./routes/auth'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});

  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("order save");
});

app.listen(PORT, () => {
  console.log("app started");
  mongoose.connect(url);
  console.log("DB connected");
});
