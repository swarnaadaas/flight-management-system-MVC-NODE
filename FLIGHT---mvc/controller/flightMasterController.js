const flightMaster = require('../model/flightMaster');

module.exports.flightMasterLogin = (req, res, next)=>{
    res.render('flightMasterLogin');
}

module.exports.flightMasterLoginPost = async (req, res, next)=>{
    const {email, password} = req.body;
    const flightMasterFromDb = await flightMaster.findOne({
        where: {email: email, password: password}
    });
    
    if(flightMasterFromDb == null){
        return res.render('flightMasterLogin', {message: 'No flightMaster with this email or password was found.'})
    }

    req.session.flightMasterId = flightMasterFromDb.id;
    res.render('flightMasterHome');
}

module.exports.flightMasterRegister = (req, res, next)=>{
    res.render('flightMasterRegister');
}

module.exports.flightMasterRegisterPost = async (req, res, next)=>{
    const {name, email, password, phone } = req.body;
    let existingflightMaster = await flightMaster.findOne({
        where: {
            email: email
        }
    });

    if(existingflightMaster){
        return res.render('flightMasterRegister', {message: 'Already registered.'});
    }

    await flightMaster.create({
        name: name,
        email: email,
        password: password,
        phone: phone
    });

    res.redirect('/flightMasterLogin');
}