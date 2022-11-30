const tbl_passenger = require('../model/passenger');

module.exports.profileIndex = (req, res, next) => {
    console.log(req.session)
    tbl_passenger.findAll({where:{id: req.session.passengerId}}).then(profiles => {
        res.render('profile-index', {
            data: profiles,
            identity: req.identity.passenger
        });
    })
}

module.exports.profileUpdate = async(req, res, next) => {
    tbl_passenger.findByPk(req.params.id)
        .then(profileFromDb => {
            res.render('profile-update', {
                data: profileFromDb
            });
        });
}


module.exports.profileUpdatePost = async (req, res, next) => {
    await tbl_passenger.update(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/profileIndex');
}

module.exports.profileDelete = async (req, res, next) => {
    let id = req.params.id;
    let profileFromDb = await tbl_passenger.findByPk(id);
    if (profileFromDb != null) {
        await tbl_passenger.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/login");
    }
}