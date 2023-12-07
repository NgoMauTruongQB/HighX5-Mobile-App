require('dotenv').config();
const { getAll, showListEventByNumCandidate, getEventDetailById, getListCandidateByEventId } = require('../CRUD/event.js');

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
        const num = request.params.num

        const queryResult = await showListEventByNumCandidate(num);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function showListCandidateByEventId(request, response)
{
    try {
        const id = request.params.id

        const queryResult = await getListCandidateByEventId(id);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function showEventDetailById(request,response)
{
    try {
        const id = request.params.id

        const queryResult = await getListCandidateByEventId(id);

        var numberCandidate = 0;

        queryResult.rows[0].Departments.forEach(element => {
            numberCandidate += element.Candidates.length;
        });

        return response.status(200).json({queryResult : queryResult.rows[0], numberCandidate});
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
    showEventDetailById : showEventDetailById,
    showListCandidateByEventId : showEventDetailById,
}