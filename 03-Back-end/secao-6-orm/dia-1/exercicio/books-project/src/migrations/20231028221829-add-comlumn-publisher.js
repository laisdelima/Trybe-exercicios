'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const publisherColumn = await queryInterface.addColumn('Books', 'publisher', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    return publisherColumn;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Books', 'publisher');
  }
};
