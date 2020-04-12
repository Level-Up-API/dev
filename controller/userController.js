const db = require('../models')

exports.postUser = (req, res, next) => {
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }).then(submittedUser => res.send(submittedUser));
}