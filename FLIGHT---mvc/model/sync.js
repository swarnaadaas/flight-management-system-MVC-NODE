const flight = require('./flight');
const schedule = require('./schedule');
const passenger = require('./passenger');
const booking = require('./booking');
const flightMaster = require('./flightMaster');

// passenger.hasMany(booking,{foreignKey:'passenger_id'});
// booking.belongsTo(passenger,{
//     foreignKey:'passenger_id'
// });

// passenger.sync({alter: true});
// flight.sync({alter: true});
// schedule.sync({alter: true});
// booking.sync({alter: true});
// flightMaster.sync({alter: true});

