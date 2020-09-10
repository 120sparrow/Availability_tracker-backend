module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('approvals', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      request_id: {
        type: Sequelize.INTEGER
      },
      approver_id: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM('sent', 'approved', 'declined'),
        allowNull: false,
        defaultValue: 'sent'
      },
      description: {
        type: Sequelize.TEXT
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
  down: queryInterface => queryInterface.dropTable('approvals'),
};
