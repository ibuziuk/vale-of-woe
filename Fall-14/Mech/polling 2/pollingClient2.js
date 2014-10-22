var http = require('http');

var getIp = require('..\\getIp');

var ip = getIp();
var port = 21337;

function getReq(){
	var optionsGet = {
 		port: port,
 		hostname:ip,
  		method: 'GET'
	};
	console.log('initiating get request.');
	var get = http.get(optionsGet, function(response){
		onDataFromServer(response, function(incoming) {

		} )
	})
	get.on('error', function(error) {
		console.log('get errored: ' + error.message);
		getReq();
	})
	get.on('end', function() {
		console.log('get ended.');
		getReq();
	})

}

function onDataFromServer(response, next) {
	response.on('data', function(data) {
		console.log(data.length);
	})
	response.on('end', function() {
		console.log('response ended and its bad.');
	})
	response.on('error', function(error) {
		console.log('response errored with error: ' + error.message);
	})
	next();
}
getReq();
process.stdin.on('readable', function(){
    var input = process.stdin.read();
  
}); 
