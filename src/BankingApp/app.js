// Importing modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const path = require("path");
const fs = require("fs");
const https = require("https");
var seaport = require("seaport");
var sp = seaport.connect("localhost", 9090);

//Added Json Body-parser
app.use(bodyParser.json());

// Require DB
const db = require("./db.js");
// Import Routes
const accountRoute = require("./routes/accounts");
const clientRoute = require("./routes/clients");
// Define Routes
app.use("/accounts", accountRoute);
app.use("/clients", clientRoute);

// Starting ssl server
const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
  },
  app
);

//Initial route
// Include + this.address().port)
app.get("/", (req, res) => {
  res.send("Welcome to the banking app from ");
});

//Start listening
sslServer.listen(sp.register("server"), function () {
  db.getConnection().then(() => {
    console.log("Database connected");
  });
  console.log("server is listening on " + this.address().port);
});
