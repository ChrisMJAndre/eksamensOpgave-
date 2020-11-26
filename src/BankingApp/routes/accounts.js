const express = require("express");
const routerAccount = express.Router();

const accountModel = require("../models/account.js");

// Implement endpoint for showing all Accounts
routerAccount.get("/", async (req, res) => {
  try {
    const accounts = await accountModel.find();
    res.json(accounts);
  } catch (err) {
    res.status(400).json("Error " + err);
  }
});

// Implement endpoint to create a new Account
routerAccount.post("/", async (req, res) => {
  try {
    let create = await accountModel.create({
      client_id: req.body.client_id,
      balance: req.body.balance,
      alias: req.body.alias,
    });
    /* cannot be used since it has to be sent as an object for the test to work 
    res.send(
      "Account added: \n" +
        "Client_id: " +
        req.body.client_id +
        "\n balance: " +
        req.body.balance +
        "\n alias: " +
        req.body.alias
    );
    */
    res.json(create);
  } catch (err) {
    res.status(400).json("Error " + err);
  }
});

// implement endpoint for showing a specific account by id
routerAccount.get("/:id", async (req, res) => {
  try {
    let oneAccount = await accountModel.findById(req.params.id).exec();
    res.json(oneAccount);
  } catch (err) {
    res.status(400).json("Error " + err);
  }
});

//Endpoint - that will transfer funds from one account to another
// has to be over the other put function or else the other put function takes transfer as the parameter
routerAccount.put("/transfer", async (req, res) => {
  try {
    const transferAmount = req.body.amount;
    const fromAccount = await accountModel
      .findById(req.body.fromAccount)
      .exec();
    const toAccount = await accountModel.findById(req.body.toAccount).exec();

    fromAccountBalance = fromAccount.balance;
    toAccountBalance = toAccount.balance;

    if (transferAmount > fromAccountBalance) {
      res.send("insufficent funds");
    } else {
      const updatedAccount1 = await accountModel
        .updateOne(
          { _id: req.body.fromAccount },
          { balance: fromAccountBalance - transferAmount }
        )
        .exec();

      const updatedAccount2 = await accountModel
        .updateOne(
          { _id: req.body.toAccount },
          { balance: toAccountBalance + transferAmount }
        )
        .exec();
      res.json(updatedAccount1 + updatedAccount2);
    }
  } catch (err) {
    res.status(400).json("Error " + err);
  }
});

// Implement endpoint for changing account
routerAccount.put("/:id", async (req, res) => {
  try {
    let updateAccount = await accountModel
      .findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      .exec();
    res.json(updateAccount);
  } catch {
    res.status(400).json("Error " + err);
  }
});

// Implement endpoint for deleting an account using id
routerAccount.delete("/:id", async (req, res) => {
  try {
    let deleteAccount = await accountModel
      .findByIdAndDelete(req.params.id)
      .exec();
    res.json(deleteAccount);
  } catch (err) {
    res.status(400).json("Error " + err);
  }
});

// Implement a new endpoint, that will be able to return a specific balance by name.
routerAccount.get("/:id/balance", async (req, res) => {
  try {
    let accountBalance = await accountModel.findById(req.params.id).exec();
    let oneBalance = accountBalance.balance;
    res.json(accountBalance);
  } catch (err) {
    res.status(400).json("Error " + err);
  }
});

module.exports = routerAccount;