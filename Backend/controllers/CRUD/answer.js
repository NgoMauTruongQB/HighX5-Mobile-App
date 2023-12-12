const models = require(process.cwd() + "/models");

async function create(answer) {
    return models.Answer.create(answer);
}

module.exports = {
    createAnswer: create,
};
