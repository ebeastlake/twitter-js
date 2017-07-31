const express = require('express');
const app = express();

//var http = require('http');
//var server = http.createServer();

//var bodyParser = require('body-parser');

app.listen(3000, function() {
	console.log('server listening');
});

app.use(function(req, res, next) {
	console.log('Request type: ' + req.method);
	console.log('Request URL: ' + req.originalUrl);
	next();
});

app.get('/', function(req, res, next) {
	res.send('Hello there!');
});

app.get('/news', function(req, res, next) {
	res.send('This is the news!');
});