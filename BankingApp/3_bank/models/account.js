const mongoose = require("mongoose");

// 3. Account Schema
const AccountSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("Account", AccountSchema);

module.exports = model;
