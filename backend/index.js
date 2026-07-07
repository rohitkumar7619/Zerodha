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

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:4000',
    'https://zerodha-frontend-sg9p.onrender.com',
    'https://zerodha-frontend.onrender.com',
    'https://zerodha-dashboard-qyax.onrender.com',
    'https://zerodha-dashboard.onrender.com',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
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

  try {
    await newOrder.save();
    res.json({ success: true, message: "Order saved" });
  } catch (err) {
    console.error("Order save error:", err);
    res.status(500).json({ error: "Failed to save order" });
  }
});

app.listen(PORT, () => {
  console.log("app started");
  mongoose.connect(url);
  console.log("DB connected");
});
