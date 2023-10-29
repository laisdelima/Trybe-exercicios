'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const book = await queryInterface.bulkInsert('Books',
      [
        {
          title: 'Pride and Prejudice',
          author: 'Jane Austen',
          pageQuantity: '336',
          createdAt: new Date('2023-10-26T19:16:50.514Z'),
          updatedAt: new Date('2023-10-26T19:16:50.514Z'),
        },
        {
          title: 'A Fé explicada',
          author: 'Leo J. Trese',
          pageQuantity: '520',
          createdAt: new Date('2023-10-26T19:16:50.514Z'),
          updatedAt: new Date('2023-10-26T19:16:50.514Z'),
        },
        {
          title: 'A conquista das virtudes',
          author: 'Francisco Faus',
          pageQuantity: '208',
          createdAt: new Date('2023-10-26T19:16:50.514Z'),
          updatedAt: new Date('2023-10-26T19:16:50.514Z'),
        },
      ], {});

      return book;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
