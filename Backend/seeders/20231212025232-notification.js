'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Notifications",
      [
          {
            id : 1,
	          event_id : 1,
	          title : "Ứng tuyển",
	          content : "Thành viên 'Trần Thị Ngọc Quyên ' muốn tham gia sự kiện 'K23 - Bén lửa sinh ra'",
	          dateTime : "2023-12-10",
	          isRead : false,
	          image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702183107/Mobile/pssybhsldjimufloxwk5.png", 
	          category : 0, // 0 : ứng tuyển, 1 : Chấp nhập, 2 : Từ chối 
          },
          {
            id : 2,
	          event_id : 2,
	          title : "Ứng tuyển",
	          content : "Thành viên 'Nguyễn Văn Dũng 'IT - GEN Z FESTIVAL'",
	          dateTime : "2023-12-10",
	          isRead : false,
	          image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702183107/Mobile/pssybhsldjimufloxwk5.png", 
	          category : 0, // 0 : ứng tuyển, 1 : Chấp nhập, 2 : Từ chối 
          },
          {
            id : 3,
	          event_id : 3,
	          title : "Ứng tuyển",
	          content : "Thành viên 'Ngô Mậu Trường' muốn tham gia sự kiện 'IT LEAGUE 2024'",
	          dateTime : "2023-12-10",
	          isRead : false,
	          image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702183107/Mobile/pssybhsldjimufloxwk5.png", 
	          category : 0, // 0 : ứng tuyển, 1 : Chấp nhập, 2 : Từ chối 
          },
      ],
      {}
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Notifications", null, {});
  }
};
