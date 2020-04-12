const Sequelize = require('sequelize');
const dotenv = require('dotenv')

dotenv.config();
// Option 1: Passing parameters separately
const sequelize = new Sequelize(process.env.DB_NAME, 'root', 'root', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

module.exports = sequelize;