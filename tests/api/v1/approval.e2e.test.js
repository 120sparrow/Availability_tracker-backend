const {token, superTest, assert} = require('../../index');

describe('Approval', () => {
    describe('POST /api/v1/request/:id/approval', () => {
        it('should create new approval', () => {
            return superTest
                .post('/api/v1/request/1/approval')
                .set('Authorization', token)
                .send({
                    id: 1,
                    request_id: 2,
                    approver_id: 1,
                    status: 'approved',
                    description: 'approved'
                })
                .expect(200)
        })
    });

    describe('GET /api/v1/request/:id/approval/:id', () => {
        it('should get request approval by request id and approval id', async () => {
            const res = await superTest
                .get('/api/v1/request/1/approval/1')
                .set('Authorization', token)
                .expect(200);
            await assert.equal(res.body.request_id, 2);
            await assert.equal(res.body.approver_id, 1);
            await assert.equal(res.body.status, 'approved');
            await assert.equal(res.body.description, 'approved');
        })
    });

    describe('PUT /api/v1/request/:id/approval/:id', () => {
        it('should update request approval by request id and approval id', () => {
            return superTest
                .put('/api/v1/request/1/approval/1')
                .set('Authorization', token)
                .send({
                    id: 1,
                    request_id: 2,
                    approver_id: 1,
                    status: 'declined',
                    description: 'declined'
                })
                .expect(200);
        })
    });

    describe('DELETE /api/v1/request/:id/approval/:id', () => {
        it('should delete request approval by request id and approval id', () => {
            return superTest
                .delete('/api/v1/request/1/approval/1')
                .set('Authorization', token)
                .expect(200);
        })
    })
});