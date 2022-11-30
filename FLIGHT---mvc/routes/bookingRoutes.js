const express = require('express');
const controllers = require('../controller/bookingController');

const router = express.Router();

router.get('/bookingIndex', controllers.bookingIndex);
router.get('/bookingUpdate/:id', controllers.bookingUpdate);
router.post('/bookingUpdate/:id', controllers.bookingUpdatePost);
router.get('/bookingDelete/:id', controllers.bookingDelete);
router.get('/booking', controllers.bookingCreate);
router.post('/booking', controllers.bookingCreatePost);

module.exports = router;