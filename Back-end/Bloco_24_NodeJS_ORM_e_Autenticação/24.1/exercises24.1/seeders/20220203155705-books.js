'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        author: 'J.R.R. Tolkien',
        title: 'The Silmarillion',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        author: 'Eduardo Spor',
        title: 'A Batalha Do Apocalipse',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
