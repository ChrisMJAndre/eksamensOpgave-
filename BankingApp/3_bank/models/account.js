const mongoose = require("mongoose");

// Creating Account Schema
const AccountSchema = new mongoose.Schema({
  //id is not reguired because mongo auto creates an id by when a new account is created
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
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
    required: false,
  },
});

const model = mongoose.model("Account", AccountSchema);

module.exports = model;
