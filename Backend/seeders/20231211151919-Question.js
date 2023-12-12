'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Question",
      [
          {
            id : 1,
	          form_id : 1,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
            id : 2,
	          form_id : 1,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
            id : 3,
	          form_id : 1,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
            id : 4,
	          form_id : 1,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
            id : 5,
	          form_id : 1,
	          question : "Bạn có kế hoạch gặp gỡ hoặc kết nối với những người mới không?"
          },
          {
            id : 6,
	          form_id : 2,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
            id : 7,
	          form_id : 2,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
            id : 8,
	          form_id : 2,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
            id : 9,
	          form_id : 2,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
            id : 10,
	          form_id : 2,
	          question : "Bạn có kế hoạch gặp gỡ hoặc kết nối với những người mới không?"
          },
          {
            id : 11,
	          form_id : 3,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
            id : 12,
	          form_id : 3,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
            id : 13,
	          form_id : 3,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
            id : 14,
	          form_id : 3,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
            id : 15,
	          form_id : 3,
	          question : "Bạn có kế hoạch gặp gỡ hoặc kết nối với những người mới không?"
          },
          
      ],
      {}
  );
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Question", null, {});
  }
};
