var http = require('http');
var url  = require('url');



var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {

	if (req.query && req.query.a && req.query.b) {
		var sum = +req.query.a + +req.query.b;
		res.end(sum+'');
	}
	else
  		res.end('No parameters were found');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server listening at http://%s:%s", host, port)

})	
