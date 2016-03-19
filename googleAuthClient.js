var fs = require('fs');
var CLIENT = JSON.parse(fs.readFileSync('client_id.json', 'utf8'));

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

module.exports = new OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URI);
