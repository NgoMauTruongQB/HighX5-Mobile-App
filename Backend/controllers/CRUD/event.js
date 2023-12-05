const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");


async function index() {
    return models.Event.findAndCountAll(
        objectCleaner.clean({
            order: [["id", "ASC"]],
        })
    );
}

module.exports = {
    getAll: index,
};
