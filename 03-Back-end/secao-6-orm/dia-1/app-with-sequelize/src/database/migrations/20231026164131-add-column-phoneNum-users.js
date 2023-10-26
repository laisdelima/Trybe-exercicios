'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'phoneNum', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('Users', 'phoneNum')
  }
};
