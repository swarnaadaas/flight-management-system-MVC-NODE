const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const tbl_schedule = sequelize.define('tbl_schedule', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    flight_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    flight_from: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    flight_to: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    flight_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    flight_time: {
        type: DataTypes.TIME,
        allowNull: false
    }
});

module.exports = tbl_schedule;