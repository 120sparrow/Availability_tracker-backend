const {token, superTest, assert} = require('../../index');

describe('Request', () => {
    describe('POST /api/v1/request', () => {
        it('should create new request', () => {
            return superTest
                .post('/api/v1/request')
                .set('Authorization', token)
                .send({
                    id: 2,
                    user_id: 2,
                    date_from: new Date(2020, 1, 10),
                    date_to: new Date(2020, 1, 20),
                    time_from: '10:00',
                    time_to: '20:00',
                    description: 'fall sick',
                    type_id: 3
                })
                .expect(200)
        })
    });

    describe('GET /api/v1/request/:id', () => {
        it('should get request by id', async () => {
            const res = await superTest
                .get('/api/v1/request/1')
                .set('Authorization', token)
                .expect(200);
            await assert.equal(res.body.user_id, 2);
            await assert.equal(res.body.time_from, '10:00');
            await assert.equal(res.body.time_to, '20:00');
            await assert.equal(res.body.description, 'fall sick');
            await assert.equal(res.body.type_id, 3);
        })
    });

    describe('GET /api/v1/request/my_requests', () => {
        it('should get request by id', async () => {
            const res = await superTest
                .get('/api/v1/request/my_requests')
                .set('Authorization', token)
                .expect(200);
        })
    });

    describe('PUT /api/v1/request/:id', () => {
        it('should update request by request id', () => {
            return superTest
                .put('/api/v1/request/2')
                .set('Authorization', token)
                .send({
                    id: 2,
                    user_id: 2,
                    date_from: new Date(2020, 1, 15),
                    date_to: new Date(2020, 1, 25),
                    time_from: '12:00',
                    time_to: '18:00',
                    description: 'vacation',
                    type_id: 1
                })
                .expect(200);
        })
    });

    describe('DELETE /api/v1/request/:id', () => {
        it('should delete request by id', () => {
            return superTest
                .delete('/api/v1/request/2')
                .set('Authorization', token)
                .expect(200);
        })
    })
});
