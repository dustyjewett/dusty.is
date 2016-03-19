var fs = require('fs');
var CLIENT = JSON.parse(fs.readFileSync('client_id.json', 'utf8'));

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

module.exports = new OAuth2(CLIENT.web.client_id, CLIENT.web.client_secret, CLIENT.web.redirect_uris[1]);
