require('dotenv').config();
const { getAll, showListEventUp5Candidate } = require('../CRUD/event.js');

async function index(request, response) {
    try {

        const queryResult = await getAll();

        queryResult.count = queryResult.rows.length
        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function getListEventUp5Candidate(request, response)
{
    try {
        const queryResult = await showListEventUp5Candidate();

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    getAllEvent : index,
    getListEventUp5Candidate : getListEventUp5Candidate,
}