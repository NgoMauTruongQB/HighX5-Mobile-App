const models = require(process.cwd() + "/models");

async function create(form) {
    return models.Form.create(form);
}

module.exports = {
    createForm: create,
};
