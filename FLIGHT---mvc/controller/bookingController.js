const tbl_booking = require('../model/booking');

module.exports.bookingIndex = (req, res, next) => {
    console.log(req.session)
    tbl_booking.findAll({where:{passenger_id: req.session.passengerId}}).then(bookings => {
        res.render('booking-index', {
            data: bookings,
            identity: req.identity.passenger
        });
    })
}

module.exports.bookingCreate = (req, res, next) => {
    res.render('booking-create');
}


module.exports.bookingCreatePost = (req, res, next) => {
    console.log("here");
    tbl_booking.create({
            flight_from: req.body.flight_from,
            flight_to: req.body.flight_to,
            flight_name: req.body.flight_name,
            flight_date: req.body.flight_date,
            flight_time: req.body.flight_time,
            passenger_id: req.body.passenger_id
        })
        .then(bookingFromDb => {
            res.redirect("/bookingIndex");
        })  
}

module.exports.bookingUpdate = async(req, res, next) => {
    tbl_booking.findByPk(req.params.id)
        .then(bookingFromDb => {
            res.render('booking-update', {
                data: bookingFromDb
            });
        });
}


module.exports.bookingUpdatePost = async (req, res, next) => {
    // var movie = await movie.findByPk(req.params.id);
    await tbl_booking.update(
        {
            flight_from: req.body.flight_from,
            flight_to: req.body.flight_to,
            flight_name: req.body.flight_name,
            flight_date: req.body.flight_date,
            flight_time: req.body.flight_time
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/bookingIndex');
}

module.exports.bookingDelete = async (req, res, next) => {
    let id = req.params.id;
    let bookingFromDb = await tbl_booking.findByPk(id);
    if (bookingFromDb != null) {
        await tbl_booking.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/bookingIndex");
    }
}