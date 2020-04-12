const Sequelize = require('sequelize');

const sequelize = new Sequelize('devlab_api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;