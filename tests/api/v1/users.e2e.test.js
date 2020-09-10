const {token, superTest} = require('../../index');

describe('Users', () => {
    describe('GET /api/v1/users/profile', () => {
        it('should get users profile', () => {
            return superTest
                .get('/api/v1/users/profile')
                .set('Authorization', token)
                .expect(404)
        })
    });

    describe('GET /api/v1/users/:id/manager', () => {
        it('should get manager users by id', () => {
            return superTest
                .get('/api/v1/users/1/manager')
                .set('Authorization', token)
                .expect(200)
        })
    });

    describe('GET /api/v1/users/:id', () => {
        it('should get users by id', () => {
            return superTest
                .get('/api/v1/users/1')
                .set('Authorization', token)
                .expect(200)
        })
    });
});