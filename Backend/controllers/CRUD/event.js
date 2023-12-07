const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");
const query = require("../../helpers/connect/connectDatabase.js")

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
            }
        ]
    }
]

async function index() {
    return models.Event.findAndCountAll(
        objectCleaner.clean({
            include : include,
            order: [["id", "ASC"]],
        })
    );
}

async function getListEventUp5Candidate() {
    const  sql = `SELECT *, COUNT(Candidates.id) AS Candidate_num
    FROM Events
    INNER JOIN Departments ON Events.id = Departments.event_id
    INNER JOIN Candidates ON Departments.id = Candidates.department_id
    GROUP BY Events.name
    HAVING Candidate_num > 1
    ORDER BY Candidate_num ASC`

    return await query(sql);
}

async function getEventDetailById(id) {
    const  sql = `SELECT *, COUNT(Candidates.id) AS memberNumber, Users.*
    FROM Events AS E
    INNER JOIN Departments ON E.id = Departments.event_id
    INNER JOIN Candidates ON Departments.id = Candidates.department_id
    RIGHT JOIN Users ON E.createdBy = Users.id
    GROUP BY E.name
    HAVING E.id = ${id}
    ORDER BY memberNumber ASC`

    return await query(sql);
}

module.exports = {
    getAll: index,
    showListEventUp5Candidate : getListEventUp5Candidate,
    getEventDetailById : getEventDetailById,
};
