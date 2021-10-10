const mongoose = require("mongoose");
const survery = require("./survery")
const Schema = mongoose.Schema;

let question = new Schema({
    survey: { type: Schema.Types.ObjectId, ref: survery },
  question: String,
  type: String,
  options: [ String ]
}, { timestamps: true });

const model = mongoose.model("question", question);

module.exports = model;