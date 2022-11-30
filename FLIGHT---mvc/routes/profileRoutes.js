const express = require('express');
const controllers = require('../controller/profileController');

const router = express.Router();

router.get('/profileIndex', controllers.profileIndex);
router.get('/profileUpdate/:id', controllers.profileUpdate);
router.post('/profileUpdate/:id', controllers.profileUpdatePost);
router.get('/profileDelete/:id', controllers.profileDelete);

module.exports = router;