const sequelize = require('sequelize');

class UsersRepository {
    constructor(database) {
        this.database = database;
    }

    getIsUserManager(id) {
        return this.database.ManagerUser.findOne({
            attributes: ['manager_id'],
            where: {
                manager_id: id
            }
        })
    }

    getById(id) {
        return this.database.User.findByPk(id);
    }

    getManagerById(id) {
        return this.database.ManagerUser.findAll({
            where: {
                manager_id: id
            }
        });
    }

    list() {
        return this.database.User.findAll();
    }

    getByEmail(email) {
        return this.database.User.findOne({
            where: {
                email
            }
        })
    }

}

module.exports = UsersRepository;
