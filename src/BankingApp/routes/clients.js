// Most of the endpoints has to use res.json and not res.send, because of how the test file is set up
// the test file does not look at the schemas in the database, but at the latest created account og client, therefore it is important that we send it as an JSON object

const express = require("express");
const routerClient = express.Router();

// Importing Client Schema
const clientModel = require("../models/client.js");

// Endpoint for showing all Clients
routerClient.get("/", async (req, res) => {
  try {
    const clients = await clientModel.find();
    res.json(clients);
  } catch (err) {
    res.status(400).json("Error " + err);
  }
});

// Endpoint to create a new Client
routerClient.post("/", async (req, res) => {
  try {
    let create = await clientModel.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      streetAddress: req.body.streetAddress,
      city: req.body.city,
    });
    res.json(create);
  } catch (err) {
    res.status(400).json("Error " + err);
  }
});

// Endpoint for showing a specific Client by id
routerClient.get("/:id", async (req, res) => {
  try {
    let oneClient = await clientModel.findById(req.params.id).exec();
    res.json(oneClient);
  } catch (err) {
    res.status(400).json("Error " + err);
  }
});

// Endpoint -  altering information about a client
// Set and req.body is used so it wont make everything else = null
routerClient.put("/:id", async (req, res) => {
  try {
    let updateClient = await clientModel
      .findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      .exec();
    res.json(updateClient);
  } catch (err) {
    res.status(400).json("Error " + err);
  }
});

// Endpoint for deleting an account using id
routerClient.delete("/:id", async (req, res) => {
  try {
    let deleteClient = await clientModel
      .findByIdAndDelete(req.params.id)
      .exec();
    res.json(deleteClient);
  } catch (err) {
    res.status(400).json("Error " + err);
  }
});

module.exports = routerClient;
