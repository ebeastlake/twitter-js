
const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true, userPage: false} );
});

router.get('/users/:name', function(req, res) {
	var name = req.params.name;
	var tweets = tweetBank.find({name: name});
	/*var tweets = tweetBank.find(function(twitterUser) {
		return name.toLowerCase() == twitterUser.name.split(" ").join("").toLowerCase();
	}); */
	console.log(tweets);
	res.render('index', {name: name, tweets: tweets, showForm: true, userPage: true});
});

router.post('/tweets', function(req, res) {
	console.log(req.body);
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name, text);
	res.redirect('/');
});

module.exports = router;