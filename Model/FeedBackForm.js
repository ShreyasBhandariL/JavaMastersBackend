const mongoose = require("mongoose");

const FeedBackFormSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  feedback: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("feedbacks", FeedBackFormSchema, "feedbacks");
