module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [
            {
                id: 1,
                username: 'Elon Musk',
                email: 'spacex@gmail.com',
                first_name: 'Elon',
                last_name: 'Musk',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 2,
                username: 'Jon Dir',
                email: 'jon.dir@gmail.com',
                first_name: 'Jon',
                last_name: 'Dir',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 3,
                username: 'Alexandr Popov',
                email: 'doctorpopov50@gmail.com',
                first_name: 'Alexandr',
                last_name: 'Popov',
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
