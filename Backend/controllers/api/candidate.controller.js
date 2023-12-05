require('dotenv').config();

const { getEventCandidateTakePartIn } = require('../CRUD/candidate.js');

async function getEventCandidateTakePartInController(request, response) {
    try {
        const userID = request.params.id

        const queryResult = await getEventCandidateTakePartIn(userID);

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
    getEventCandidateTakePartIn : getEventCandidateTakePartInController,
}