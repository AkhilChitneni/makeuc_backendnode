const mongoose = require("mongoose");
const question = require('./question')
const Schema = mongoose.Schema;

let response = new Schema({
  quesitonid: {type: Schema.Types.ObjectId, ref: question},
  response: String
}, { timestamps: true});

const model = mongoose.model("response", response);

module.exports = model;