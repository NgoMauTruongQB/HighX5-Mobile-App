const models = require(process.cwd() + "/models");

async function create(form) {
    return models.Form.create(form);
}

const include = [
    {
        model : models.Question,
        attributes : ["question", "id"]
    }
]

async function findFormApplicationByEventID(event_id) {
    return models.Form.findAndCountAll({
        include : include,
        where : {
            id : event_id,
            category : 0,
        },
    });
}

// get applicaiton form of candidate
const include2 = [
    {
        model : models.Question,
        attributes : ["question", "id"],
        include : [{
            model : models.Answer,
            required : true,
        }]
    }
]

async function findFormApplicationOfCandidate(event_id, user_id) {
    return models.Form.findAndCountAll({
        include : include2,
        where : {
            id : event_id,
            category : 0,
            '$Form.Question.Answer.user_id$' : user_id, 
        },
    });
}

module.exports = {
    createForm: create,
    findFormApplicationByEventID : findFormApplicationByEventID,
    findFormApplicationOfCandidate : findFormApplicationOfCandidate,
};
