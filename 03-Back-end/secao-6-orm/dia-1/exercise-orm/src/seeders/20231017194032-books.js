'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books',
      [
        {
          title: 'Pride and Prejudice',
          author: 'Jane Austen',
          pageQuantity: 279,
          createdAt: new Date('2023-10-17T16:50:32.181Z'),
          updatedAt: new Date('2023-10-17T16:50:32.181Z'),
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
