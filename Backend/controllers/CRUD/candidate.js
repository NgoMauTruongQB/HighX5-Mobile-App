const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");

const include = [
    {
        model: models.Department,
        attributes : ["name", "description", "event_id"],
        include : [
            {
                model: models.Event,
            },
        ]
    },
];

async function getEventCandidateTakePartIn(userID) {
    return models.Candidate.findAndCountAll(
        objectCleaner.clean({
            order: [["id", "ASC"]],
            include : include,
            where : {
                '$Candidate.user_id$' : userID,
            }
        })
    );
}

module.exports = {
    getEventCandidateTakePartIn: getEventCandidateTakePartIn,
};