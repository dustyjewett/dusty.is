var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dusty Is' });
});

var gifOptions = {
  root: __dirname + '/../gifs/',
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};
var sendGif = function(req, res) {
  var name = req.path.substring(1);
  if(name.indexOf('.gif') === -1) {
    name += ".gif";
  }
  res.sendFile( name, gifOptions);
};

router.get('/drinking.coffee(.gif)?', sendGif);
router.get('/drinking/coffee(.gif)?', sendGif);

router.get('/coding.furiously(.gif)?', sendGif);
router.get('/coding/furiously(.gif)?', sendGif);

router.get('/giffing', function(req, res, next) {
  res.render('')
});

module.exports = router;
