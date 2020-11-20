// Post må godt indeholde string
// Get mp ikke indeholde en string (skal være res.json)
// Put skal være res.JSOn

const express = require("express");
const routerClient = express.Router();

const clientModel = require("../models/client.js");

// Implement endpoint for showing all Clients
routerClient.get("/", async (req, res) => {
  try {
    //await clientModel.find().then((client) => res.json({ client }));
    const clients = await clientModel.find();
    res.send("Clients" + clients);
  } catch (err) {
    res.status(400).json("Error " + err);
  }
});

// Implement endpoint to create a new Client
routerClient.post("/", async (req, res) => {
  let create = await clientModel.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
  });
  res.send(
    "Client added: \n" +
      "firstName: " +
      req.body.firstname +
      "\n lastName: " +
      req.body.lastname +
      "\n street_address: " +
      req.body.streetAddress +
      "\n city: " +
      req.body.city
  );
  res.json(create);
});

// implement endpoint for showing a specific Client by id
routerClient.get("/:id", async (req, res) => {
  let oneClient = await clientModel.findById(req.params.id).exec();
  res.send(oneClient.firstname + "s information:" + oneClient);
});

// Implement endpoint for changing information about a client
routerClient.put("/:id", async (req, res) => {
  let updateClient = await clientModel
    .findByIdAndUpdate(req.params.id, {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      streetAddress: req.body.streetAddress,
      city: req.body.city,
    })
    .exec();
  res.send("Updated information for " + updateClient.firstname);
});

// Implement endpoint for deleting an account using id
routerClient.delete("/:id", async (req, res) => {
  let deleteClient = await clientModel.findByIdAndDelete(req.params.id).exec();
  res.send(
    deleteClient.firstname + " Deleted from the database" + deleteClient
  );
});

module.exports = routerClient;
