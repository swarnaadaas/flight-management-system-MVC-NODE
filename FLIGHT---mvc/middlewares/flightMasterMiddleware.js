const flightMaster = require('../model/flightMaster');

module.exports = async (req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        flightMaster: null
    }

    if(req.url == "/flightMasterLogin" || req.url == "/flightMasterRegister"){
        return next();
    }

    let flightMasterId = req.session.flightMasterId;
    if(!flightMasterId || flightMasterId == null){
        return res.redirect("/flightMasterLogin");
    }

    let flightMasterFromDb = await flightMaster.findByPk(flightMasterId);
    if(flightMasterFromDb == null){
        return res.redirect("/flightMasterLogin");
    }

    req.identity.isAuthenticated = true;
    req.identity.flightMaster = {
        id: flightMasterFromDb.dataValues.id,
        name: flightMasterFromDb.dataValues.name,
        email: flightMasterFromDb.dataValues.email,
        phone: flightMasterFromDb.dataValues.phone,
        role: 'flightMaster'
    }
    next();
}