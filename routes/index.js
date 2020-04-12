var express = require('express');
var router = express.Router();

const User = require('../controller/userController')

router.get('/', function (req, res) {
    User.getAllUsers(res)
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

module.exports = router;
