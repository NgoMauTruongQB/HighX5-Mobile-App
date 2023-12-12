const express = require('express');
const ActivityApiControllers = require('../controllers/api/activity.controller')
const router = express.Router();

router.get('/get_activity_by_user_id/', ActivityApiControllers.getActivityByUser)

router.post('/create_activity/', ActivityApiControllers.addActivity)

router.put('/update_activity/', ActivityApiControllers.updateActivityController)

module.exports = router