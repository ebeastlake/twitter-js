const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');

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

app.use(express.static('public'));
app.use('/', routes);

//Listening on the server
app.listen(3000, function() {
	console.log('server listening');
});