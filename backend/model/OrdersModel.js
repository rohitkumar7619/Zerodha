const { model } = require("mongoose");

const { OrdersSchema, OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersSchema = new model("order", OrdersSchema);

module.exports = { OrdersSchema };
