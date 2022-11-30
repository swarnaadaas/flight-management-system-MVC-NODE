const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("fms", "root", "root", {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;