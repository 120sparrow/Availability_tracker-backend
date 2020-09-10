module.exports = (sequelize, DataTypes) => {
  const RequestType = sequelize.define('RequestType', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    need_approval: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    time_period: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'request_types',
    timestamps: true,
    underscored: true
  });
  RequestType.associate = models => {
    RequestType.hasMany(models.Request, {
      foreignKey: 'id'
    })
  };
  return RequestType;
};
