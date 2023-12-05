"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Departments",
            [
                {
                    name: "Ban truyền thông",
                    description: "Ban truyền thông",
                    event_id: 1
                },
                {
                    name: "Ban nội dung",
                    description: "Ban nội dung",
                    event_id: 1
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban kĩ thuật",
                    event_id: 1
                },
                // Event_2
                {
                    name: "Ban truyền thông",
                    description: "Ban truyền thông",
                    event_id: 2
                },
                {
                    name: "Ban nội dung",
                    description: "Ban nội dung",
                    event_id: 2
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban kĩ thuật",
                    event_id: 2
                },
                // Event_3
                {
                    name: "Ban truyền thông",
                    description: "Ban truyền thông",
                    event_id: 3
                },
                {
                    name: "Ban nội dung",
                    description: "Ban nội dung",
                    event_id: 3
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban kĩ thuật",
                    event_id: 3
                },
                // Event_4
                {
                    name: "Ban truyền thông",
                    description: "Ban truyền thông",
                    event_id: 4
                },
                {
                    name: "Ban nội dung",
                    description: "Ban nội dung",
                    event_id: 4
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban kĩ thuật",
                    event_id: 4
                },
                // Event_5
                {
                    name: "Ban truyền thông",
                    description: "Ban truyền thông",
                    event_id: 5
                },
                {
                    name: "Ban nội dung",
                    description: "Ban nội dung",
                    event_id: 5
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban kĩ thuật",
                    event_id: 5
                },
                // Event_6
                {
                    name: "Ban truyền thông",
                    description: "Ban truyền thông",
                    event_id: 6
                },
                {
                    name: "Ban nội dung",
                    description: "Ban nội dung",
                    event_id: 6
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban kĩ thuật",
                    event_id: 6
                },
                // Event_7
                {
                    name: "Ban truyền thông",
                    description: "Ban truyền thông",
                    event_id: 7
                },
                {
                    name: "Ban nội dung",
                    description: "Ban nội dung",
                    event_id: 7
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban kĩ thuật",
                    event_id: 7
                },
                // Event_8
                {
                    name: "Ban truyền thông",
                    description: "Ban truyền thông",
                    event_id: 8
                },
                {
                    name: "Ban nội dung",
                    description: "Ban nội dung",
                    event_id: 8
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban kĩ thuật",
                    event_id: 8
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Departments", null, {});
    },
};
