const tbl_schedule = require('../model/schedule');

module.exports.scheduleIndex = (req, res, next) => {
    tbl_schedule.findAll().then(schedules => {
        res.render('schedule-index', {
            data: schedules,
            identity: req.identity.flightMaster
        });
    })
}

module.exports.scheduleCreate = (req, res, next) => {
    console.log(1)
    res.render('schedule-create');
}

module.exports.scheduleCreatePost = (req, res, next) => {
    tbl_schedule.create({
            flight_name: req.body.flight_name,
            flight_from: req.body.flight_from,
            flight_to: req.body.flight_to,
            flight_date: req.body.flight_date,
            flight_time: req.body.flight_time
        })
        .then(scheduleFromDb => {
            res.redirect("/scheduleIndex");
        })
}

module.exports.scheduleUpdate = async(req, res, next) => {
    tbl_schedule.findByPk(req.params.id)
        .then(scheduleFromDb => {
            res.render('schedule-update', {
                data: scheduleFromDb
            });
        });
}


module.exports.scheduleUpdatePost = async (req, res, next) => {
    await tbl_schedule.update(
        {
            flight_name: req.body.flight_name,
            flight_from: req.body.flight_from,
            flight_to: req.body.flight_to,
            flight_date: req.body.flight_date,
            flight_time: req.body.flight_time
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/scheduleIndex');
}

module.exports.scheduleDelete = async (req, res, next) => {
    let id = req.params.id;
    let scheduleFromDb = await Schedule.findByPk(id);
    if (scheduleFromDb != null) {
        await tbl_schedule.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/scheduleIndex");
    }
}