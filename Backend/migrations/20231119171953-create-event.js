"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Events", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
              type: Sequelize.STRING,
            },
            sologan: {
                type: Sequelize.STRING,
            },
            date_start: {
                type: Sequelize.DATE,
            },
            date_end: {
                type: Sequelize.DATE,
            },
            location: {
                type: Sequelize.STRING,
            },
            status: {
                type : Sequelize.STRING,
            },
            image:{
              type : Sequelize.BLOB('medium'),
            },
            createdBy:{
                type : Sequelize.INTEGER,
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
        await queryInterface.dropTable("Events");
    },
};