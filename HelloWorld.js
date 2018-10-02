// add and us build-in module of node.js
var http = require('http');
// add and use my module
var dt = require('./myFirstModule');
// add module 'url'
var url = require('url');

http.createServer(function (req, res) {
    //add http header
	// 200 - everything is ok
	// sub - the object contain that response header
	res.writeHead(200, {'Content-Type': 'text/html'});
	// get date and time
	// and write a response to client
	res.write("The date and time are currently: " + dt.myDateTime());
    // write a response to client
	res.write('<br>Hello World!<br>');
	// get the url of the client use req(request) object
	res.write(req.url);
	// parsing the url above
	// use object q contain the parse'struct
	var q = url.parse(req.url, true).query;
	// get attrs in the struct previous parse
	// that value depend on the url that was sent from the client 
	var year = q.year
	var month = q.month
	//	write the result on the response to client
	res.write('<br>' + year);
	res.write('<br>' + month);
	// notificate to client that all thing was sent and break
	res.end()
}).listen(8080); // listen at port 8080 on my laptop'server