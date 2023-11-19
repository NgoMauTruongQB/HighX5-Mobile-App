"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Forms", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            category: {
                type: Sequelize.STRING,
            },
            title: {
                type: Sequelize.STRING,
            },
            event_id: {
              type: Sequelize.INTEGER,
            },
            status: {
              type: Sequelize.STRING,
            },
            date_end: {
              type: Sequelize.DATE,
            },
            date_start: {
              type: Sequelize.DATE,
            },
            createdBy : {
              type :Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("NOW"),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("NOW"),
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Forms");
    },
};