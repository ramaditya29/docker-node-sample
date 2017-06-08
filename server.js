var http = require('http');
var Chance = require('chance');
var chance = new Chance();
http.createServer(function(req,res){

     var data = {
	"firstname": chance.first(),
	"lastname": chance.last(),
	"age": chance.age(),
	"address": chance.address(),
	"phone": chance.phone()
     };
     res.writeHead(200, {"Content-Type": "application/json"})
     res.end("Hello World");
}).listen(3000, function(err){
	if(err){
		console.log("Error occurred");
	}
	console.log("Server started successfully at port:3000");
})
