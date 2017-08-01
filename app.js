const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes=require('./routes');

//var http = require('http');
//var server = http.createServer();

//var bodyParser = require('body-parser');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

var locals = {
	title: 'An Example', 
	people: [
		{name: 'Gandalf'}, 
		{name: 'Frodo'}, 
		{name: 'Hermoione'}
	]
};


const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

nunjucks.render('index.html', locals, function(err, output) { // Do we need the callback because we're passing a local variable?
	console.log(output);
});

//Middleware

app.use('/', routes)




//Listening on the serverc
app.listen(3000, function() {
	console.log('server listening');
});