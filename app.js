const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');
var socketio=require('socket.io');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*app.use(function (req, res) {
	req.body = 
  //res.setHeader('Content-Type', 'text/plain')
  //res.write('you posted:\n')
  //res.end(JSON.stringify(req.body, null, 2))
})*/
var server=app.listen(3000, function() {
	console.log('server listening');
});

var io=socketio.listen(server);

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use('/', routes(io));

//Listening on the server

