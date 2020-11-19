const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./db.js");
const path = require("path");
const fs = require("fs");
const https = require("https");
var seaport = require("seaport");
var sp = seaport.connect("localhost", 9090);

//Load Balancer
let pings = 0;
var server = https.createServer(function (req, res) {
  pings++;
  res.end(`Port: ` + this.address().port);
  console.log("Server A responded to request " + pings);
});

server.listen(sp.register("server"), function () {
  console.log("Server A is listening on port: " + this.address().port);
});

//curl http://localhost:8080
//Added Json Body-parser
app.use(bodyParser.json());

//Import Routes
const accountRoute = require("./routes/accounts");
const routerAccount = require("./routes/accounts");

const clientRoute = require("./routes/clients");
const routerClient = require("./routes/clients");

app.use("/accounts", accountRoute);
app.use("/client", clientRoute);

// Starting ssl server
const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
  },
  app,
  routerAccount,
  routerClient
);

//Initial route
app.get("/", (req, res) => {
  res.send("Welcome to the banking app");
});

//Start listening

sslServer.listen(3443, () => {
  db.getConnection().then(() => {
    console.log("Database connected");
  });
  console.log("server is listening on 3443");
});
