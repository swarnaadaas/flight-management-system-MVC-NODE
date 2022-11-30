const Passenger = require('../model/passenger');

module.exports.login = (req, res, next)=>{
    res.render('login');
}

module.exports.loginPost = async (req, res, next)=>{
    const {email, password} = req.body;
    const passengerFromDb = await Passenger.findOne({
        where: {email: email, password: password}
    });
    
    if(passengerFromDb == null){
        return res.render('login', {message: 'No passenger with this email or password was found.'})
    }

    req.session.passengerId = passengerFromDb.id;
    res.redirect('/bookingIndex');
}

module.exports.register = (req, res, next)=>{
    res.render('register');
}

module.exports.registerPost = async (req, res, next)=>{
    const {name, email, password, phone } = req.body;
    let existingPassenger = await Passenger.findOne({
        where: {
            email: email
        }
    });

    if(existingPassenger){
        return res.render('register', {message: 'Already registered.'});
    }

    await Passenger.create({
        name: name,
        email: email,
        password: password,
        phone: phone
    });

    res.redirect('/login');
}