const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsSchema = new model("holding", HoldingsSchema);

module.exports = { HoldingsSchema };
