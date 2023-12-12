'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Answer",
      [
          {
            id : 1,
            question_id : 1,
            user_id  : 4,
            answer : "Chưa tham event nào trước đây"
          },
          {
            id : 2,
            question_id : 2,
            user_id  : 4,
            answer : "Tôi muốn biết liệu sự kiện có sử dụng phương tiện truyền thông nào để chia sẻ thông tin và tương tác với người tham gia hay không."
          },
          
          {
            id : 3,
            question_id : 3,
            user_id  : 4,
            answer : "Tôi biết qua sự giới thiệu của bạn bè"
          },
          
          {
            id : 4,
            question_id : 4,
            user_id  : 4,
            answer : "Mục tiêu của tôi khi tham gia là để giao lưu, học hỏi, phát triển bản thân"
          },
          
          {
            id : 5,
            question_id : 5,
            user_id  : 4,
            answer : "Tôi rất muốn tham gia và gặp gỡ những người khác nhưng vẫn chưa có kế hoạch"
          },
          {
            id : 6,
            question_id : 6,
            user_id  : 2,
            answer : "Chưa tham event nào trước đây"
          },
          {
            id : 7,
            question_id : 7,
            user_id  : 2,
            answer : "Tôi muốn biết liệu sự kiện có sử dụng phương tiện truyền thông nào để chia sẻ thông tin và tương tác với người tham gia hay không."
          },
          
          {
            id : 8,
            question_id : 8,
            user_id  : 2,
            answer : "Tôi biết qua sự giới thiệu của bạn bè"
          },
          
          {
            id : 9,
            question_id : 9,
            user_id  : 2,
            answer : "Mục tiêu của tôi khi tham gia là để giao lưu, học hỏi, phát triển bản thân"
          },
          
          {
            id : 10,
            question_id : 10,
            user_id  : 2,
            answer : "Tôi rất muốn tham gia và gặp gỡ những người khác nhưng vẫn chưa có kế hoạch"
          },
          {
            id : 11,
            question_id : 11,
            user_id  : 3,
            answer : "Chưa tham event nào trước đây"
          },
          {
            id : 12,
            question_id : 12,
            user_id  : 3,
            answer : "Tôi muốn biết liệu sự kiện có sử dụng phương tiện truyền thông nào để chia sẻ thông tin và tương tác với người tham gia hay không."
          },
            
          {
            id : 13,
            question_id : 13,
            user_id  : 3,
            answer : "Tôi biết qua sự giới thiệu của bạn bè"
          },
          
          {
            id : 14,
            question_id : 14,
            user_id  : 3,
            answer : "Mục tiêu của tôi khi tham gia là để giao lưu, học hỏi, phát triển bản thân"
          },
          
          {
            id : 15,
            question_id : 15,
            user_id  : 3,
            answer : "Tôi rất muốn tham gia và gặp gỡ những người khác nhưng vẫn chưa có kế hoạch"
          },
          

         
          

          
      ],
      {}
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Answer", null, {});
  }
};
