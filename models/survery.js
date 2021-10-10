const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let survey = new Schema({
  name: String,
  uniqueNumber: Number,
  description: String
}, { timestamps: true});

const model = mongoose.model("survey", survey);

module.exports = model;