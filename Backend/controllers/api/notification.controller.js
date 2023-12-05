require('dotenv').config();

const { getNotificationByUserId } = require('../CRUD/notification.js');

async function getNotificationByUserIdController(request, response) {
    try {
        const userID = request.params.id;
        console.log(userID)
        
        const queryResult = await getNotificationByUserId(userID);

        queryResult.count = queryResult.rows.length
        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    getNotificationByUserIdController : getNotificationByUserIdController,
}