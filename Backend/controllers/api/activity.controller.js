require("dotenv").config();
const { createActivity, findActivityByUserId, updateActivity, findActivityByID, findActivityByEventIDAndStatus, findAllActivityByUserId, findAllActivityByEventID, findActivityUnDelivered } = require("../CRUD/activity");
const objectCleaner = require("../../helpers/object-cleaner");

async function addActivity(request, response) {
    try {
        const { event_id , date_start, date_end, content, candidate_id } = request.body;

        const newAct = {
            event_id : event_id,
            date_start : date_start,
            date_end : date_end,
            content : content,
            status : 0,
            candidate_id : candidate_id,
        }

        createActivity(newAct).then((result)=>{
            return response.status(200).json({message : "create activity successfully", result: result});
        })
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function getActivityByUser(request, response)
{
    try {
        const { status , user_id } = request.query;

        var result;

        if(status != 2)
        {
            result = await findActivityByUserId(user_id, status)
        }
        else
        {
            result = await findAllActivityByUserId(user_id);   
        }

        return response.status(200).json(result);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function getActivityByEvent(request, response)
{
    try {
        const { status , event_id, delivered, all } = request.query;

        console.log(status , event_id, delivered, all)
        var result;

        if(all == 'true')
        {
            result = await findAllActivityByEventID(event_id);  
        }
        else
        {
            if(delivered == '0')
            {
                console.log(2)
                result = await findActivityUnDelivered(event_id)
            }
            else
            {
                console.log(3)
                result = await findActivityByEventIDAndStatus(event_id, status)
            }
        }

        return response.status(200).json(result);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function updateActivityController(request, response) {
    try {
        const { activity_id, status , date_start, date_end, content, candidate_id } = request.body;

        const updateAct = objectCleaner.clean({
            date_start : date_start,
            date_end : date_end,
            content : content,
            status : status,
            candidate_id : candidate_id,
        })

        updateActivity(updateAct, activity_id).then(async (result)=>{
            return response.status(200).json({message : "update activity successfully", result: await findActivityByID(activity_id)});
        })
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    addActivity : addActivity,
    getActivityByUser : getActivityByUser,
    getActivityByEvent : getActivityByEvent,
    updateActivityController : updateActivityController,
};
