const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const tbl_flight = sequelize.define('tbl_flight', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    flight_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    flight_type: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    flight_capacity: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
});

module.exports = tbl_flight;