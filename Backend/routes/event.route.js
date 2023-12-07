const express = require('express');
const EventApiControllers = require('../controllers/api/event.controller');
const eventController = require('../controllers/api/event.controller');
const router = express.Router();

router.get('/', EventApiControllers.getAllEvent)

router.get('/list_events_by_num_candidates/:num', EventApiControllers.getListEventUp5Candidate)

router.get('/list_candidate/:id', EventApiControllers.showEventDetailById)

router.get('/event_detail/:id',eventController.showEventDetailById)

module.exports = router