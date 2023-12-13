const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");
const query = require("../../helpers/connect/connectDatabase.js");
const { request } = require("express");

const include = [
    {
        model : models.TypeEvent,
        attributes : ['id', 'type']
    }
]

const include2 = [
    {
        model : models.Department,
        attributes : ['name', 'description', 'event_id', 'id'],
        include : [
            {
                model : models.Candidate,
                attributes : ['user_id', 'department_id'],
                include : [{
                    model : models.User,
                    required : true,
                    include : [{
                        model : models.Faculity,
                        required : true,
                    }]
                }]
            }
        ]
    },
    {
        model : models.User,
        required : true,
    }
]

const include3 = [
    {
        model : models.Department,
        attributes : ['name'],
        include : [
            {
                model : models.Candidate,
                attributes : ['user_id', 'department_id'],
                include : [
                    {
                        model : models.User,
                    }
                ]
            }
        ]
    },
]

async function index() {
    return models.Event.findAndCountAll(
        objectCleaner.clean({
            include : include,
            order: [["id", "DESC"]],
        })
    );
}

async function getListEventByNumCandidate(number) {
    const  sql = `SELECT Events.*, COUNT(Candidates.id) AS numberCandidates
    FROM Events
    INNER JOIN Departments ON Events.id = Departments.event_id
    INNER JOIN Candidates ON Departments.id = Candidates.department_id
    GROUP BY Events.name
    HAVING numberCandidates >= ${number}
    ORDER BY numberCandidates ASC`
    return await query(sql);
}

async function getEventDetailById(id) {
    return models.Event.findAndCountAll(
        objectCleaner.clean({
            include : include2,
            where : {id : id},
            order: [["id", "ASC"]],
        })
    );
}

async function getListCandidateByEventId(id) {
    return models.Event.findAndCountAll(
        objectCleaner.clean({
            include : include3,
            attributes : ['id', 'name', 'slogan'],
            where : {id : id},
            order: [["id", "ASC"]],
        })
    );
}

async function create(event)
{
    return models.Event.create(event);
}


module.exports = {
    getAll: index,
    showListEventByNumCandidate : getListEventByNumCandidate,
    getEventDetailById : getEventDetailById,
    getListCandidateByEventId : getListCandidateByEventId,
    createEvent : create,
};
