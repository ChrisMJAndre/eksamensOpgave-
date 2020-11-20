const mongoose = require("mongoose");

// Creating Client Schema
const ClientSchema = new mongoose.Schema(
  {
    //id is not reguired because mongo auto creates an id by when a new account is created
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
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

const modelClient = mongoose.model("Client", ClientSchema);

module.exports = modelClient;
