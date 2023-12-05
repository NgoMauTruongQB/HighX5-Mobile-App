const express = require('express');
const EventApiControllers = require('../controllers/api/event.controller')
const router = express.Router();

router.get('/', EventApiControllers.getAllEvent)


module.exports = router