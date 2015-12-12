var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/software.engineer', function(req, res, next) {
    res.render('resume', { 
        title: 'Dusty Is A Software Engineer',
        description: "Dusty Jewett is a Software Engineer specializing in the 'Front Half' of 'The Stack'."
    });
});


module.exports = router;
