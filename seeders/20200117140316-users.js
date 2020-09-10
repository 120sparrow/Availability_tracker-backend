module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [
            {
                id: 1,
                username: 'Konstantin Gritsenko',
                email: 'gritsenko.konstantin@gmail.com',
                first_name: 'Konstantin',
                last_name: 'Gritsenko',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 2,
                username: 'Markas Kvitka',
                email: 'markas.kvitka@gmail.com',
                first_name: 'Markas',
                last_name: 'Kvitka',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 3,
                username: 'Alexandr Borysenko',
                email: 'doctoraleks50@gmail.com',
                first_name: 'Alexandr',
                last_name: 'Borysenko',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 4,
                username: 'Eugene Buranov',
                email: '120sparrow@gmail.com',
                first_name: 'Eugene',
                last_name: 'Buranov',
                created_at: new Date(),
                updated_at: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};
