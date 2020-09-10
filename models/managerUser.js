module.exports = (sequelize, DataTypes) => {
  const ManagerUser = sequelize.define('ManagerUser', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    manager_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    tableName: 'manager_users',
    timestamps: true,
    underscored: true
  });
  ManagerUser.associate = models => {
    ManagerUser.hasMany(models.Request, {
      foreignKey: 'user_id',
      targetKey: 'user_id'
    });
  };
  return ManagerUser;
};
