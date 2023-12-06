"use strict";
const hashHelper = require(process.cwd() + "/helpers/password-encrypter");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Users",
            [
                {
                    name: "Admin123",
                    gender: "Nam",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg",
                    gmail: "admin123@gmail.com",
                    password: hashHelper.hash("admin123"),
                    faculity_id : 1,
                    university : "Bách Khoa Đà Nẵng"
                },
                {
                    name: "Nguyễn Văn Dũng",
                    gender: "Nam",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg", 
                    gmail: "dung1702@gmail.com",
                    password: hashHelper.hash("dung123"),
                    faculity_id : 1,
                    university : "Bách Khoa Đà Nẵng"
                },
                {
                  name: "Ngô Mậu Trường",
                  gender: "Nam",
                  birthday: "2003-02-17",
                  telephone: "0905116391",
                  address: "Number 1 in your heart",
                  avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg", 
                  gmail: "truong123@gmail.com",
                  password: hashHelper.hash("truong123"),
                  faculity_id : 1,
                  university : "Bách Khoa Đà Nẵng"
                },
                {
                  name: "Trần Thị Ngọc Quyên",
                  gender: "Nữ",
                  birthday: "2003-02-17",
                  telephone: "0905116391",
                  address: "Number 1 in your heart",
                  avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg", 
                  gmail: "quyen123@gmail.com",
                  password: hashHelper.hash("quyen123"),
                  faculity_id : 1,
                  university : "Bách Khoa Đà Nẵng"
              },{
                  name: "Trần Kim Hiếu",
                  gender: "Nam",
                  birthday: "2003-02-17",
                  telephone: "0905116391",
                  address: "Number 1 in your heart",
                  avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg", 
                  gmail: "hieu123@gmail.com",
                  password: hashHelper.hash("hieu123"),
                  faculity_id : 1,
                  university : "Bách Khoa Đà Nẵng"
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Users", null, {});
    },
};
