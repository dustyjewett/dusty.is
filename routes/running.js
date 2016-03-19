var express = require('express');
var router = express.Router();
var fs = require('fs');
var jwt = require('express-jwt');
var googleapis = require('googleapis');
var oauth2Client = require('../googleAuthClient');
var moment = require('moment');

function fromCookies (req) {
    if (req.cookies && req.cookies.jwt) {
        return req.cookies.jwt;
    }
    return null;
}

/* GET /running */
/* GET home page. */
router.get('', function(req, res, next) {
    res.render('running', {
        title: 'Dusty Is Running',
        description: "Dusty is running, training for a 10k"
    });
});

function asNS(date){
    if(date.getTime) {
        date = date.getTime();
    }
    return date + "000000";
}

/* GET /running */
router.get('/data', jwt({
    secret: 'dustys-super-awesome-secret',
    getToken: fromCookies
}), function(req, res, next) {
    oauth2Client.setCredentials(req.user.google);
    var fitness = googleapis.fitness({ version: 'v1', auth: oauth2Client });
    var startTime = moment().subtract(1, 'month').toDate()
    fitness.users.dataSources.datasets.get({
        userId:'me',
        dataSourceId: 'derived:com.google.distance.delta:com.nike.plusgps:',
        datasetId: asNS(startTime) + '-' + asNS(Date.now())
    }, function(err, data){
        res.send({
            success:true,
            distance: data
        });
    })
    
});

var session_activity_segment = {
    "dataStreamId": "derived:com.google.activity.segment:com.nike.plusgps:session_activity_segment",
    "dataStreamName": "session_activity_segment",
    "type": "derived",
    "dataType": {
        "name": "com.google.activity.segment",
        "field": [
            {
                "name": "activity",
                "format": "integer"
            }
        ]
    },
    "application": {
        "packageName": "com.nike.plusgps"
    }
};

var distance_delta = {
    "dataStreamId": "derived:com.google.distance.delta:com.nike.plusgps:",
    "name": "DISTANCE_DELTA",
    "dataStreamName": "",
    "type": "derived",
    "dataType": {
        "name": "com.google.distance.delta",
        "field": [
            {
                "name": "distance",
                "format": "floatPoint"
            }
        ]
    },
    "application": {
        "packageName": "com.nike.plusgps"
    }
};
var speed_summary = {
    "dataStreamId": "derived:com.google.speed.summary:com.nike.plusgps:",
    "name": "SPEED_SUMMARY",
    "dataStreamName": "",
    "type": "derived",
    "dataType": {
        "name": "com.google.speed.summary",
        "field": [
            {
                "name": "average",
                "format": "floatPoint"
            },
            {
                "name": "max",
                "format": "floatPoint"
            },
            {
                "name": "min",
                "format": "floatPoint"
            }
        ]
    },
    "application": {
        "packageName": "com.nike.plusgps"
    }
};

var speed = {
    "dataStreamId": "derived:com.google.speed:com.nike.plusgps:",
    "name": "SPEED",
    "dataStreamName": "",
    "type": "derived",
    "dataType": {
        "name": "com.google.speed",
        "field": [
            {
                "name": "speed",
                "format": "floatPoint"
            }
        ]
    },
    "application": {
        "packageName": "com.nike.plusgps"
    }
};

var session = {
    "id": "6707000000004908369660022078119842034814",
    "name": "Nike+ Run",
    "description": "Nike+ Run",
    "startTimeMillis": "1456813685110",
    "endTimeMillis": "1456815665110",
    "modifiedTimeMillis": "1456818426499",
    "application": {
        "packageName": "com.nike.plusgps"
    },
    "activityType": 8
};


module.exports = router;
