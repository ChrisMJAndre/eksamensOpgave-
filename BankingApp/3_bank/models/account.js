const mongoose = require("mongoose");

// 3. Account Schema
const AccountSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  client_id: {
    type: String,
    required: true,
  },
  balance: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("Account", AccountSchema);

const ClientSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  street_address: {
    type: String,
    required: true,
  },
});

const model2 = mongo.model2("Client", ClientSchema);

module.exports = model;
module.exports = model2;
