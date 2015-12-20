var express = require('express');
var router = express.Router();
var ShoebillJS = new require('shoebill-js');

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

router.get('/reading.docs', function(req, res, next) {
  var sbjs = new ShoebillJS();
  sbjs.ogtitle('Dusty Is Reading Docs');
  sbjs.ogtype('video.other');
  sbjs.ogvideo({
    url: 'http://dusty.is/moving-pictures/reading.docs.mp4',
    width: 640,
    height: 360
  });

  res.render('mp', {
    layout: 'moving-pictures',
    file: '/ani/' + 'reading.docs.mp4',
    meta: sbjs.toHTML()
  });
});

module.exports = router;
