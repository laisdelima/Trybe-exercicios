'use strict';

// SE O CÓDIGO DA MIGRATION TIVER ERROS, AS MIMGRATIONS PODEM NÃO EXECUTAR CORRETAMENTE OS PROCESSOS DE CRIAR OU DESFAZER UMA NOVA VERSÃO.

// Importante: A execução de uma migration requer o uso das variáveis de ambiente, uma vez que será realizado um acesso ao banco de dados.

module.exports = {
  // os parâmetros são objetos que armazenam dados e operações.
  // queryInterface: usado para modificar o DB.
  // Sequelize: armazena tipos de dados (varchar, string...).
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    // desfaz o que foi feito no método up.
    await queryInterface.dropTable('Users');
  }
};
