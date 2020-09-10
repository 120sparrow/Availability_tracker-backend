module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('requests', [
            {
                id: 1,
                user_id: 2,
                date_from: new Date(2020, 1, 10),
                date_to: new Date(2020, 1, 20),
                time_from: '10:00',
                time_to: '20:00',
                description: 'fall sick',
                type_id: 3,
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('requests', null, {});
    }
};

