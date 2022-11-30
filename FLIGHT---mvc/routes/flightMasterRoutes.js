const express = require('express');
const controller = require('../controller/flightMasterController');

const router = express.Router();

router.get('/flightMasterLogin', controller.flightMasterLogin);
router.post('/flightMasterLogin', controller.flightMasterLoginPost);
router.get('/flightMasterRegister', controller.flightMasterRegister);
router.post('/flightMasterRegister', controller.flightMasterRegisterPost);

module.exports = router;