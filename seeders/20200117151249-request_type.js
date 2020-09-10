module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('request_types', [
            {
                id: 1,
                slug: 'vacation',
                need_approval: true,
                time_period: false,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 2,
                slug: 'availability',
                need_approval: false,
                time_period: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 3,
                slug: 'sick',
                need_approval: false,
                time_period: false,
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('request_types', null, {});
    }
};
