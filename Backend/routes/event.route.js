const express = require('express');
const EventApiControllers = require('../controllers/api/event.controller');
const eventController = require('../controllers/api/event.controller');
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', EventApiControllers.getAllEvent)

router.get('/list_events_by_num_candidates/:num', EventApiControllers.getListEventUp5Candidate)

router.get('/list_candidate/:id', EventApiControllers.showListCandidateByEventId)

router.get('/event_detail/:id',eventController.showEventDetailById)

router.post('/create/', upload.single('image'), eventController.create)

module.exports = router