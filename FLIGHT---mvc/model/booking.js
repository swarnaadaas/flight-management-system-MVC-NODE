const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const tbl_booking = sequelize.define('tbl_booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    flight_from: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    flight_to: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    flight_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    flight_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    flight_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    passenger_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = tbl_booking;