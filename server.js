var http = require('http');
var url  = require('url');

var server = http.createServer(function(req, res) {
	var parts = url.parse(req.url,true);
	res.writeHead(200);
	if (parts.query && parts.query.a && parts.query.b) {
		var sum = +parts.query.a + +parts.query.b;
		res.end(sum+'');
	}
	else
  		res.end('No parameters were found');
});

server.listen(8080,function(){
	console.log('Server listen on port 8080')
});