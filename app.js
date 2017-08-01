const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

//var http = require('http');
//var server = http.createServer();

//var bodyParser = require('body-parser');

var locals = {
	title: 'An Example', 
	people: [
		{ name: 'Gandalf' }, 
		{ name: 'Frodo' }, 
		{ name: 'Hermoione' }
	]
};

nunjucks.configure('views');
nunjucks.render('index.html', locals, function(err, output) {
	console.log(output);
});

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