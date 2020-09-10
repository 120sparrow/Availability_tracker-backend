module.exports = (sequelize, DataTypes) => {
    const Request = sequelize.define('Request', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        date_from: DataTypes.DATE,
        date_to: DataTypes.DATE,
        time_from: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        time_to: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ''
        },
        type_id: DataTypes.INTEGER
    }, {
        tableName: 'requests',
        timestamps: true,
        underscored: true
    });
    Request.associate = models => {
        Request.belongsTo(models.User, {
            foreignKey: 'user_id'
        });
        Request.belongsTo(models.RequestType, {
            foreignKey: 'type_id'
        });
        Request.hasMany(models.Approval, {
            foreignKey: 'request_id'
        });
        Request.belongsTo(models.ManagerUser, {
            foreignKey: 'user_id',
            targetKey: 'user_id'
        });
    };
    return Request;
};
