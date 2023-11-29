const mongoose = require("mongoose");

const CustomerEvent = new mongoose.Schema(
    {
      description: { type: String, required: true },
      type: {
        type: String,
        
      },
      date: { type: Date, required: true },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("CustomerEvent", CustomerEvent);