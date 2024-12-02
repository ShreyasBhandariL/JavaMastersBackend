const mongoose = require("mongoose");

const requestFormSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  clgName: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("requestForms", requestFormSchema, "requestForms");
