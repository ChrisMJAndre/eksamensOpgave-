const express = require("express");
const routerClient = express.Router();

const clientModel = require("../models/client.js");

// Implement endpoint for showing all Clients
routerClient.get("/", async (req, res) => {
  clientModel
    .find()
    .then((client) => res.json({ client }))
    .catch((err) => res.status(400).json("Error " + err));
});

// Implement endpoint to create a new Client
routerClient.post("/", async (req, res) => {
  let create = await clientModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    street_address: req.body.street_address,
    city: req.body.city,
  });
  res.send(
    "Client added: \n" +
      "firstName: " +
      req.body.firstName +
      "\n lastName: " +
      req.body.lastName +
      "\n street_address: " +
      req.body.street_address +
      "\n city: " +
      req.body.city
  );
  res.end(create).catch((err) => res.status(400).json("Error " + err));
});

// implement endpoint for showing a specific Client by id
routerClient.get("/:id", async (req, res) => {
  let oneClient = await clientModel.findById(req.params.id).exec();
  res
    .send(oneClient.firstName + "s information:" + oneClient)
    .catch((err) => res.status(400).json("Error " + err));
});

// Implement endpoint for changing information about a client
routerClient.put("/:id", async (req, res) => {
  let updateClient = await clientModel
    .findByIdAndUpdate(req.params.id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      street_address: req.body.street_address,
      city: req.body.city,
    })
    .exec();
  res
    .send("Updated information for " + updateClient.firstName)
    .catch((err) => res.status(400).json("Error " + err));
});

// Implement endpoint for deleting an account using id
routerClient.delete("/:id", async (req, res) => {
  let deleteClient = await clientModel.findByIdAndDelete(req.params.id).exec();
  res
    .send(deleteClient.firstName + " Deleted from the database" + deleteClient)
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = routerClient;
