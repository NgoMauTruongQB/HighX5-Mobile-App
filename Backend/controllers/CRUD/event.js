const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");


const include = [
    {
        model : models.TypeEvent,
        attributes : ['id', 'type']
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

module.exports = {
    getAll: index,
};
