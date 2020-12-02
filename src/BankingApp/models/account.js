const mongoose = require("mongoose");

// Creating Account Schema
const AccountSchema = new mongoose.Schema(
  {
    client_id: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    alias: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

// Exporting Account Schema
const model = mongoose.model("Account", AccountSchema);

module.exports = model;
