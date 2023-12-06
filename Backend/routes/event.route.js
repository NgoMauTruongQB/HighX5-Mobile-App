const express = require('express');
const EventApiControllers = require('../controllers/api/event.controller')
const router = express.Router();

router.get('/', EventApiControllers.getAllEvent)

router.get('/list_events_more_than_5_candidates/', EventApiControllers.getListEventUp5Candidate)

module.exports = router