var http = require('http');
var seaport = require('seaport');
var sp = seaport.connect('localhost', 9090);


let pings = 0;
var server = http.createServer(function (req, res){
    pings++
    res.end(`Function Sum: ${findSum()} from port: ` + this.address().port);
    console.log("Server A responded to request " + pings);
});


server.listen(sp.register("server"), function()  {
    console.log("Server A is listening on port: " + this.address().port)
}); 


//curl http://localhost:8080
