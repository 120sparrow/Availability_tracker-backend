const factory = require('../di');
const Op = require('sequelize').Op;

const managerUsers = {
    '120sparrow@gmail.com': [
        'gritsenko.konstantin@gmail.com',
        'markas.kvitka@gmail.com',
        'doctoraleks50@gmail.com',
        '120sparrow@gmail.com'
    ]
};

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const result = [];
        for (let managerEmail in managerUsers) {
            const managerId = (await factory.Database.User.findOne({
                where: {
                    email: managerEmail
                }
            })).id;
            const user = await factory.Database.User.findAll({
                where: {
                    email: {
                        [Op.in]: managerUsers[managerEmail]
                    }
                }
            });
            result.push({
                manager_id: managerId,
                user_id: managerId,
                created_at: new Date(),
                updated_at: new Date()
            })
            user.map(item => result.push({
                manager_id: managerId,
                user_id: item.id,
                created_at: new Date(),
                updated_at: new Date()
            }));
        }

        return queryInterface.bulkInsert('manager_users', result, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('manager_users', null, {});
    }
};
