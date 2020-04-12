var User = require('../DAO/userDAO');

exports.createHero = function (req, res, next) {
    var user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    };

    User.create(user, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "" +
                "User created successfully"
        })
    })
}