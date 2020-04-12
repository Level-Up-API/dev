const Sequelize = require('sequelize');

var userModel = require('../model/userModel')

userModel.statics = {
    create: function (data, cb) {
        var user = new this(data);
        user.save(cb);
    }
}