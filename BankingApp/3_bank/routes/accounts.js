const express = require("express");
const routerAccount = express.Router();

const accountModel = require("../models/account.js");

// Implement endpoint for showing all accounts
routerAccount.get("/", async (req, res) => {
  accountModel.find().then((accounts) => res.json({ accounts }));
});

// Implement endpoint to create a new Account
routerAccount.post("/", async (req, res) => {
  let create = await accountModel.create({
    client_id: req.body.client_id,
    balance: req.body.balance,
    alias: req.body.alias,
  });
  res.send(
    "Account added: \n" +
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

//Endpoint - that will transfer funds from one account to another
// has to be over the other put function or else the other put function takes transfer as the parameter
routerAccount.put("/transfer", async (req, res) => {
  const transferAmount = req.body.amount;
  const fromAccount = await accountModel.findById(req.body.fromAccount).exec();
  const toAccount = await accountModel.findById(req.body.toAccount).exec();

  fromAccountBalance = fromAccount.balance;
  toAccountBalance = toAccount.balance;

  if (req.body.amount > fromAccountBalance) {
    res.send("insufficent funds");
  } else {
    await accountModel
      .updateOne(
        { _id: req.body.fromAccount },
        { balance: fromAccountBalance - transferAmount }
      )
      .exec();

    await accountModel
      .updateOne(
        { _id: req.body.toAccount },
        { balance: toAccountBalance + transferAmount }
      )
      .exec();
    res.send("Transfered " + transferAmount + "to another account");
  }
});

// Implement endpoint for changing an accounts balance
routerAccount.put("/:id", async (req, res) => {
  let updateBalance = await accountModel
    .findByIdAndUpdate(req.params.id, { balance: req.body.balance })
    .exec();
  res.send("Updated balance for " + updateBalance.alias);
});

// Implement endpoint for deleting an account using id
routerAccount.delete("/:id", async (req, res) => {
  let deleteAccount = await accountModel
    .findByIdAndDelete(req.params.id)
    .exec();
  res.send(deleteAccount);
});

// Implement a new endpoint, that will be able to return a specific balance by name.
routerAccount.get("/:id/balance", async (req, res) => {
  let accountBalance = await accountModel.findById(req.params.id).exec();
  let oneBalance = accountBalance.balance;
  res.send(accountBalance.alias + "s balance is: " + oneBalance);
});

module.exports = routerAccount;
