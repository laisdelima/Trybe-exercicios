'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const booksTable = await queryInterface.createTable('Books', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pageQuantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })

    return booksTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};
