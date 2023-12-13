const models = require(process.cwd() + "/models");

async function create(form) {
    return models.Form.create(form);
}

const include = [
    {
        model : models.Question,
        attributes : ["question", "id"]
    },
    {
        model : models.Event,
        required : true,
    }
]

async function findFormApplicationByEventID(event_id) {
    return models.Form.findAndCountAll({
        include : include,
        where : {
            event_id : event_id,
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
            attributes : ['user_id', 'answer'],
            include : [{
                model : models.User,
                required : true
            }]
        }]
    }
]

async function findFormApplicationOfCandidate(event_id, user_id) {
    return models.Form.findAndCountAll({
        include : include2,
        where : {
            event_id : event_id,
            category : 0,
            '$Questions.Answers.user_id$' : user_id, 
        },
    });
}

module.exports = {
    createForm: create,
    findFormApplicationByEventID : findFormApplicationByEventID,
    findFormApplicationOfCandidate : findFormApplicationOfCandidate,
};