const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mySchema = new Schema({
  user: String,
  message: String,
  date: Date,
});

const model = mongoose.model("Message", mySchema);
module.exports = model;
