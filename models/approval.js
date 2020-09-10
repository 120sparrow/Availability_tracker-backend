module.exports = (sequelize, DataTypes) => {
  const Approval = sequelize.define('Approval', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true
    },
    request_id: DataTypes.INTEGER,
    approver_id: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM('sent', 'approved', 'declined'),
      allowNull: false,
      defaultValue: 'sent'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'approvals',
    timestamps: true,
    underscored: true
  });
  Approval.associate = models => {
    Approval.hasMany(models.Request, {
      foreignKey: 'id'
    });
  };
  return Approval;
};
