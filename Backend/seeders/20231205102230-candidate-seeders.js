"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Candidates",
            [
                // Event_1
                {
                    department_id: 1,
                    user_id: 1,
                },
                // Event_2
                {
                    department_id: 5,
                    user_id: 1,
                },
                // Event_3
                {
                    department_id: 7,
                    user_id: 1,
                },
                // Event_4
                {
                    department_id: 16,
                    user_id: 1,
                },
                // Event_5
                {
                    department_id: 18,
                    user_id: 1,
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Candidates", null, {});
    },
};
