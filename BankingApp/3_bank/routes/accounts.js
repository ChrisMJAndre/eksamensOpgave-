const express = require("express");
const routerAccount = express.Router();

const accountModel = require("../models/account.js");
/*
// Implement a new endpoint, that will be able to return a specific balance by name.
routerAccount.get("/:name", async function (req, res) {
  let accountBalance = await accountModel
    .findOne({ firstName: req.params.name })
    .exec();
  let oneBalance = accountBalance.balance;
  res.send(req.params.name + "s balance is: " + oneBalance);
  //res.send(oneAccount.balance);
});
*/

// Implement endpoint for showing all accounts
routerAccount.get("/", async (req, res) => {
  accountModel.find().then((accounts) => res.json({ accounts }));
});

// Implement endpoint to create a new User
routerAccount.post("/", async (req, res) => {
  let create = await accountModel.create({
    client_id: req.body.client_id,
    balance: req.body.balance,
    alias: req.body.alias,
  });
  res.send(
    "User added: \n" +
      "Client_id: " +
      req.body.client_id +
      "\n balance: " +
      req.body.balance +
      "\n alias: " +
      req.body.alias
  );
  res.end(create);
});

// implement endpoint for showing a specific account by id
routerAccount.get("/:id", async (req, res) => {
  let oneAccount = await accountModel.findById(req.params.id).exec();
  res.send(oneAccount.alias + "s account:" + oneAccount);
});

// Implement endpoint for changing an accounts balance
routerAccount.put("/:id", async (req, res) => {
  let updateBalance = await accountModel
    .findByIdAndUpdate(req.params.id, { balance: req.body.balance })
    .exec();
  res.send(updateBalance);
});

module.exports = routerAccount;
