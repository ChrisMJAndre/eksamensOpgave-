var https = require("https");
var httpProxy = require("http-proxy");
var seaport = require("seaport");
var sp = seaport.connect("localhost", 9090);
const path = require("path");
const fs = require("fs");

// Reference til step 4
var i = -1;

var proxy = httpProxy.createProxyServer({});

var server = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "../cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "../cert", "cert.pem")),
  },
  function (req, res) {
    var addresses = sp.query();
    if (addresses.length == 0) {
      res.end("No Servers Available");
    }
    // Reference til step 4
    i = (i + 1) % addresses.length;
    var host = addresses[i].host.split(":").reverse()[0];
    var port = addresses[i].port;
    console.log(port);
    proxy.web(req, res, {
      target: "https://" + host + ":" + port,
      secure: false,
    });
  }
);

server.listen(8080, "localhost");
