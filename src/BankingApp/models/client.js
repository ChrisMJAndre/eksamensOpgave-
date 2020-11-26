const mongoose = require("mongoose");

// Creating Client Schema
const ClientSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

// Exporting Client Schema
const modelClient = mongoose.model("Client", ClientSchema);

module.exports = modelClient;
