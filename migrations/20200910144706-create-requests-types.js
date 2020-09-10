module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('request_types', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      need_approval: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      time_period: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: queryInterface => queryInterface.dropTable('request_types'),
};
