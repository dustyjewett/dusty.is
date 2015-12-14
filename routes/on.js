var express = require('express');
var router = express.Router();

router.get('/facebook', function(req, res, next) {
    res.redirect('https://www.facebook.com/dusty.jewett');
});

router.get('/twitter', function(req, res, next) {
    res.redirect('https://www.twitter.com/dustyjewett');
});

router.get('/linkedin', function(req, res, next) {
    res.redirect('https://www.linkedin.com/in/dustyjewett');
});

router.get('/xbox', function(req, res, next) {
    res.redirect('https://account.xbox.com/en-US/Profile?gamertag=codecrshr');
});





module.exports = router;
