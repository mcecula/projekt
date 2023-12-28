const mongoose = require("mongoose");

const CustomerEvent = new mongoose.Schema({
  description: { type: String, required: true },
  type: {
    type: String,
    enum: ["call", "meeting", "email"]
  },
  date: { type: Date, required: true },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
},
  { timestamps: true }
);

module.exports = mongoose.model("CustomerEvent", CustomerEvent);