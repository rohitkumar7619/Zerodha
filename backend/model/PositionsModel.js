const { model } = require("mongoose");

const { PositionsModel } = require("../schemas/PositionsSchema.js");

const PositionsModel = new model("positions", PositionsSchema);

module.exports = { PositionsModel };
