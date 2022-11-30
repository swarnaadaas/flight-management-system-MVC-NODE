const express = require('express');
const controller = require('../controller/scheduleController');

const router = express.Router();

router.get('/scheduleIndex', controller.scheduleIndex);
router.get('/scheduleCreate', controller.scheduleCreate);
router.post('/scheduleCreate', controller.scheduleCreatePost);
router.get('/scheduleUpdate/:id', controller.scheduleUpdate);
router.post('/scheduleUpdate/:id', controller.scheduleUpdatePost);
router.get('/scheduleDelete/:id', controller.scheduleDelete);

module.exports = router;