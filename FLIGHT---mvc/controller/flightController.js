const Flight = require('../model/flight');

module.exports.index = (req, res, next) => {
    Flight.findAll().then(flights => {
        res.render('flight-index', {
            data: flights,
            identity: req.identity.flightMaster
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('flight-create');
}

module.exports.createPost = (req, res, next) => {
    Flight.create({
            flight_name: req.body.flight_name,
            flight_type: req.body.flight_type,
            flight_capacity: req.body.flight_capacity
            
        })
        .then(flightFromDb => {
            res.redirect("/index");
        })
}

module.exports.update = async(req, res, next) => {
    Flight.findByPk(req.params.id)
        .then(flightFromDb => {
            res.render('flight-update', {
                data: flightFromDb
            });
        });
}


module.exports.updatePost = async (req, res, next) => {
    await Flight.update(
        {
            flight_name: req.body.flight_name,
            flight_type: req.body.flight_type,
            flight_capacity: req.body.flight_capacity
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/index');
}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let flightFromDb = await Flight.findByPk(id);
    if (flightFromDb != null) {
        await Flight.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/index");
    }
}