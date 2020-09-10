module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        defaultValue: ''
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        defaultValue: ''
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
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
  down: queryInterface => queryInterface.dropTable('users'),
};
