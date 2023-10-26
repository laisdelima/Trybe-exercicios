'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        full_name: 'Leonardo',
        email: 'leo@test.com',
        phoneNum: '123456789',
      },
      {
        full_name: 'JEduardo',
        email: 'edu@test.com',
        phoneNum: '123456789',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};