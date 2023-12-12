require("dotenv").config();
const { findFormApplicationByEventID } = require("../CRUD/form");

async function getFormApp(request, response) {
    try {
        const id = request.params.id;

        const queryResult = await findFormApplicationByEventID(id);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    getFormApp: getFormApp,
};
