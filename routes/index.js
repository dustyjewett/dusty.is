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

router.get('/giffing/:gif', function(req, res, next) {
  console.log("Headers: ", req.headers);
  res.sendFile('reading.docs.mp4', {
    root: __dirname + '/../public/moving-pictures/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
      'Content-Type': 'image/gif'
    }
  })
});

router.get('/reading.docs', function(req, res, next) {
  var video = 'http://dusty.is/moving-pictures/reading.docs.mp4';
  var sbjs = new ShoebillJS();
  sbjs.ogtitle('Dusty Is Reading Docs');
  sbjs.ogtype('video.other');
  sbjs.ogvideo({
    url: video,
    type: 'video/mp4',
    width: 640,
    height: 360
  });

  res.render('mp', {
    layout: 'moving-pictures',
    file: video,
    meta: sbjs.toHTML()
  });
});

router.get('/pretzeling', function(req, res, next) {
  res.render('pretzel');
});

module.exports = router;
