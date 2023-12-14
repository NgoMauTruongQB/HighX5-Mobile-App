const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");

async function create(activity) {
    return models.Activity.create(activity);
}

async function update(activity, id) {
    return models.Activity.update(activity,{
        where : { id : id }
    });
}

const include = [
    {
        model : models.Candidate,
        required : true,
        include : [{
            model : models.User,
            required : true
        }]
    },
    {
        model : models.Event,
        required : true,
    }
]

async function findActivityByUserId(user_id, status)
{
    return models.Activity.findAndCountAll({
        include : include,
        where : objectCleaner.clean({
            "$Candidate.user_id$" : user_id,
            status : status
        }),
    });
}

async function findAllActivityByUserId(user_id)
{
    return models.Activity.findAndCountAll({
        include : include,
        where : objectCleaner.clean({
            "$Candidate.user_id$" : user_id,
        }),
    });
}

async function findActivityByEventID(event_id, status)
{
    return models.Activity.findAndCountAll({
        include : include,
        where : objectCleaner.clean({
            event_id : event_id,
            status : status
        }),
    });
}

async function findAllActivityByEventID(event_id)
{
    return models.Activity.findAndCountAll({
        include : include,
        where : objectCleaner.clean({
            event_id : event_id,
        }),
    });
}

async function findActivityByID(id)
{
    return models.Activity.findOne({
        include : include,
        where : {
            id : id
        },
    });
}

module.exports = {
    createActivity: create,
    updateActivity : update,
    findActivityByUserId : findActivityByUserId,
    findActivityByID : findActivityByID,
    findActivityByEventID : findActivityByEventID,
    findAllActivityByUserId : findAllActivityByUserId,
    findAllActivityByEventID : findAllActivityByEventID
};
