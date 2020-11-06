const express = require("express");
const routerClient = express.Router();

const clientModel = require("../models/client.js");

// Implement endpoint for showing all accounts
routerClient.get("/", async (req, res) => {
  clientModel.find().then((clients) => res.json({ clients }));
});
//ENDPOINTS___

module.exports = routerClient;
