const sequelize = require('sequelize');
const Op = sequelize.Op;
const moment = require('moment');

class RequestRepository {
    constructor(database) {
        this.database = database;
    }

    list() {
        return this.database.Request.findAll({
            include: [
                {
                    model: this.database.User,
                    attributes: ['username'],
                    required: true
                },
                {
                    model: this.database.RequestType,
                    attributes: ['slug', 'need_approval', 'time_period'],
                    required: true
                },
                {
                    model: this.database.Approval,
                    required: false
                }
            ]
        });
    }

    getByDate(date) {
        return this.database.Request.findAll({
            where: {
                date_from: {
                    [Op.lte]: moment({
                        year: date.year,
                        month: date.month,
                        date: moment({year: date.year, month: date.month}).daysInMonth()
                    }).format()
                },
                date_to: {
                    [Op.gte]: moment({
                        year: date.year,
                        month: date.month
                    }).format()
                }
            },
            include: [
                {
                    model: this.database.User,
                    attributes: ['username'],
                    required: true
                },
                {
                    model: this.database.RequestType,
                    attributes: ['slug', 'need_approval', 'time_period'],
                    required: true
                },
                {
                    model: this.database.Approval,
                    required: false
                }
            ]
        });
    }

    create(data) {
        return this.database.Request.create({
            user_id: data.user_id,
            date_from: data.date_from,
            date_to: data.date_to,
            time_from: data.time_from,
            time_to: data.time_to,
            description: data.description,
            type_id: data.type_id
        });
    }

    getById(id) {
        return this.database.Request.findOne({
            where: {
                id: id
            },
            include: [{
                model: this.database.RequestType,
                attributes: ['slug', 'need_approval', 'time_period'],
            }]
        });
    }

    getByUserId(id) {
        return this.database.Request.findAll({
            where: {
                user_id: id,
                date_to: {
                    [Op.gte]: moment({
                        hour: 0,
                        second: 0,
                        millisecond: 0
                    }).format()
                }
            },
            include: [
                {
                    model: this.database.RequestType,
                    attributes: ['slug', 'need_approval', 'time_period'],
                },
                {
                    model: this.database.Approval,
                    required: false
                }
            ]
        });
    }

    getType() {
        return this.database.RequestType.findAll()
    }

    getNeedApproval(userId) {
        return this.database.Request.findAll({
            where: {
                date_to: {
                    [Op.gte]: moment({
                        hour: 0,
                        second: 0,
                        millisecond: 0
                    }).format()
                }
            },
            include: [
                {
                    model: this.database.RequestType,
                    attributes: ['slug', 'need_approval'],
                    required: true
                },
                {
                    model: this.database.User,
                    attributes: ['username'],
                    required: true
                },
                {
                    model: this.database.Approval,
                    required: false
                },
                {
                    model: this.database.ManagerUser,
                    attributes: ['manager_id'],
                    required: true,
                    where: {
                        manager_id: userId
                    }
                }
            ],
            having: [
                sequelize.where(sequelize.col('need_approval'), true)
            ]
        });
    }

    update(id, data) {
        return this.database.Request.update({
                date_from: data.date_from,
                date_to: data.date_to,
                time_from: data.time_from,
                time_to: data.time_to,
                description: data.description,
                type_id: data.type_id
            },
            {
                where: {
                    id: id
                }
            });
    }

    async delete(id) {
        const a = await this.database.Request.destroy({
            where: {
                id: id
            }
        });
        await this.database.Approval.destroy({
            where: {
                request_id: id
            }
        });
        return a
    }
}

module.exports = RequestRepository;
