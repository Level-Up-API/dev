const db = require('../models')

exports.getAllUsers = (res) => {
    db.User.findAll().then(users => res.send(users))
}

exports.getOneUser = (res, req) => {
    db.User.findAll({
        where: {
            id: req.params.id
        }
    }).then(user => res.send(user))
}

exports.postUser = (req, res) => {
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }).then(submittedUser => res.send(submittedUser));
}

exports.putUser = (req, res) => {
    db.User.update(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        },
        {
            where: {id: req.body.id}
        }
    ).then(() => res.send('success'))
}

exports.deleteUser = (req, res, next) => {
    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send('success'))
}