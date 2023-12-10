require('dotenv').config();
const { getAll, showListEventByNumCandidate, getEventDetailById, getListCandidateByEventId } = require('../CRUD/event.js');
const cloudinary  = require("../../config/cloudinary.config");
const { getTypeByName } = require('../CRUD/type.js');
const { createEvent } = require("../CRUD/event.js")

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
        console.log(id)

        const queryResult = await getEventDetailById(id);

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


async function create(request, response)
{
    try
    {
        
        const {name, description, slogan, date_start, date_end, location, status, createdBy, type_name} = request.body
        
        const type_id = (await getTypeByName(type_name)).id;
        if (!request.file) {
            const image = "http://res.cloudinary.com/deei5izfg/image/upload/v1702004634/Mobile/gcbrzefat1xjps9qmexs.png";

            const newEvent={
                name :name, 
                description : description,
                slogan : slogan,
                date_start : date_start,
                date_end : date_end,
                location : location,
                image : image,
                status : status,
                createdBy : createdBy,
                type_id : type_id,
            }

            createEvent(newEvent).then((result) => {

                return response.status(200).json({
                    message: "Create event successfully!",
                    result: result
                });
            });
        }
        else
        {
            const fileBuffer = request.file.buffer;

            await cloudinary.uploader.upload_stream(
                { resource_type: 'auto', folder: "Mobile" },
                (error, result) => {
                    if (error) {
                        return response.status(500).json({ error: 'Error uploading image to Cloudinary' });
                    }

                    const image = result.url;

                    const newEvent={
                        name :name, 
                        description : description,
                        slogan : slogan,
                        date_start : date_start,
                        date_end : date_end,
                        location : location,
                        image : image,
                        status : status,
                        createdBy : createdBy,
                        type_id : type_id,
                    }

                    createEvent(newEvent).then((result) => {

                        return response.status(200).json({
                            message: "Create event successfully!",
                            result: result
                        });
                    });
                }
            ).end(fileBuffer);
        }
    }catch(e)
    {
        console.log(e)
    }
}
module.exports = {
    getAllEvent : index,
    getListEventUp5Candidate : getListEventUp5Candidate,
    showEventDetailById : showEventDetailById,
    showListCandidateByEventId : showListCandidateByEventId,
    create : create,
}