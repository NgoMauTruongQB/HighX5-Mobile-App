const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");

async function showUserByAccount(gmail) {
    return models.User.findOne({
        where: { gmail: gmail },
    });
}

async function index(startIndex, limit) {
    return models.User.findAndCountAll(
        objectCleaner.clean({
            // include: include,
            offset: Number.isNaN(startIndex) ? null : startIndex,
            limit: Number.isNaN(limit) ? null : limit,
            order: [["id", "ASC"]],
        })
    );
}

module.exports = {
    getUserByAccount : showUserByAccount,
    getAll: index,
};
