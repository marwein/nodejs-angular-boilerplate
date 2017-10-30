var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.html');
});

router.post('/', function(req, res, next) {
    var user = new User({
        firsName : req.body.firsName,
        lastName : req.body.lastName,
        login : req.body.login,
        password : req.body.password,
        email : req.body.email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
