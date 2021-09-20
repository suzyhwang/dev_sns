module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("posts", [
      {
        userId: "1",
        comment: "안녕하세요!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  },
};
