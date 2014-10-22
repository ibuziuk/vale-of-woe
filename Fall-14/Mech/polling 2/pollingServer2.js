var http = require('http');
var getIp = require('..\\getIp');

var connected = [];
var period = 6000;

var server = http.createServer(function (req, res) {
	if ( req.method == 'GET' ) {
		getHandler(req, res);
		console.log('get method');
		return;
	} 
})


function getHandler(request, response) {
	connected.push({req: request, res: response});
}

var ip = getIp();
var port = 21337;

server.listen(port, ip);
server.setTimeout(0);
console.log('Server listen at ' + ip + ':' + port);
var i = 100;
setInterval(function() {
  console.log('period.');
  i = i*5;
  connected.forEach(function(client) {
  		var message = new Array(i).join('W');
  		client.res.write(message.toString());
  		console.log('index: ' + i);
  })
}, period);