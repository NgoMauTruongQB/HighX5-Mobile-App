const models = require(process.cwd() + "/models");

async function create(department) {
    return models.Department.create(department);
}

module.exports = {
    createDepartment : create,
};
