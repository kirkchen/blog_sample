"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          title: "Title 1",
          content: "Content 1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Title 2",
          content: "Content 2",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Posts", null, {});
  }
};
