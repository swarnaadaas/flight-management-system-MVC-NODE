const passenger = require('../model/passenger');

module.exports = async (req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        passenger: null
    }

    if(req.url == "/login" || req.url == "/register"){
        return next();
    }

    let passengerId = req.session.passengerId;
    if(!passengerId || passengerId == null){
        return res.redirect("/login");
    }

    let passengerFromDb = await passenger.findByPk(passengerId);
    if(passengerFromDb == null){
        return res.redirect("/login");
    }

    req.identity.isAuthenticated = true;
    req.identity.passenger = {
        id: passengerFromDb.dataValues.id,
        name: passengerFromDb.dataValues.name,
        email: passengerFromDb.dataValues.email,
        phone: passengerFromDb.dataValues.phone,
        role: 'passenger'
    }
    next();
}