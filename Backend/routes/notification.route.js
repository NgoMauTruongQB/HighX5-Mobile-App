const express = require('express');
const NotificationApiControllers = require('../controllers/api/notification.controller')
const router = express.Router();

router.get('/:id', NotificationApiControllers.getNotificationByUserIdController)


module.exports = router