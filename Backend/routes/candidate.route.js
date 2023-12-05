const express = require('express');

const router = express.Router();

const candidateController = require('../controllers/api/candidate.controller')


router.get('/event_take_part_in/:id', candidateController.getEventCandidateTakePartIn);


module.exports = router;
