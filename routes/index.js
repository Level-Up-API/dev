var express = require('express');
var router = express.Router();

const User = require('../controller/userController')

const {FB, FacebookApiException} = require('fb');

var passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy;

router.get('/', function (req, res) {
    res.render('accueil', {title: "facebook"})
});

router.get('/find/:id', function (req, res) {
    User.getOneUser(res, req)
})

router.post('/', function (req, res) {
    User.postUser(req, res);
})

router.put('/edit', function (req, res) {
    User.putUser(req, res)
})

router.delete("/delete/:id", (req, res) => {
    User.deleteUser(req, res)
})

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect:'/failure'
    }))

router.get('/failure', function(req, res) {
    res.render('index', {title: "failure"})
})

module.exports = router;
