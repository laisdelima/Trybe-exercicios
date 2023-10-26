'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const UserTable = await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'full_name',
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    })

    return UserTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
