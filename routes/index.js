
const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.use(express.static('/Users/ErikaNewland/Fullstack/GH1707/twitter-js/public'))

// router.get('/stylesheets/style.css', function(req, res){
//     res.sendFile('/Users/ErikaNewland/Fullstack/GH1707/twitter-js/public/stylesheets/style.css')
// })

module.exports = router;