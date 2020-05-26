var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var oauth2Client = require('../googleAuthClient');

/* GET /authorizing.google */
router.get('', function(req, res, next) {
    if (req.query.code) {
        var code = req.query.code;
        oauth2Client.getToken(code, function(err, tokens) {
            // Now tokens contains an access_token and an optional refresh_token. Save them.
            if(!err) {
                console.log(tokens);
                oauth2Client.setCredentials(tokens);
                var token = jwt.sign({
                    google: tokens
                }, 'dustys-super-awesome-secret');
                res.cookie('jwt', token, { maxAge: 9000000, httpOnly: true });
                res.send({
                    success:true
                });
            }
        });
    } else {
        
// generate a url that asks permissions for Google+ and Google Calendar scopes
        var scopes = [
            'https://www.googleapis.com/auth/fitness.activity.read',
            'https://www.googleapis.com/auth/fitness.body.read',
            'https://www.googleapis.com/auth/fitness.location.read'
        ];

        var url = oauth2Client.generateAuthUrl({
            access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
            scope: scopes // If you only need one scope you can pass it as string
        });
        res.redirect(url);
    }
    
    
});


module.exports = router;
