var express = require('express');
var router = express.Router();

const Post = require('../controller/userController')

router.get('/', function (req, res, next) {
    db.User.findAll().then(users => res.send(users))
});

router.post('/', function (req, res, next) {
    Post.postUser(req, res, next);
})

/**console.log(req)
 userController(req)
 res.send(req.body.firstname)
 */


module.exports = router;
