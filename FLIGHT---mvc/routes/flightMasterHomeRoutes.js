const express = require('express');
const controller = require('../controller/flightMasterHomeController');

const router = express.Router();

router.get('/flightMasterHome', controller.flightMasterHome);


module.exports = router;