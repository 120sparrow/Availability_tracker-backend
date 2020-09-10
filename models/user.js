module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      defaultValue: ''
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: ''
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'users',
    timestamps: true,
    underscored: true
  });
  User.associate = models => {
    User.hasMany(models.Request, {
      foreignKey: 'id'
    });
  };
  return User;
};