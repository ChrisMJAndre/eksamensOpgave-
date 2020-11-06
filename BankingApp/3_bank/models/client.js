const mongoose = require("mongoose");

// Creating Client Schema
const ClientSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
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

const modelClient = mongoose.model("Client", ClientSchema);

module.exports = modelClient;
