class ApprovalRepository {
    constructor(database) {
        this.database = database;
    }

    async list() {
        const res = await this.database.Approval.findAll({
            attributes: ['request_id']
        });
        return res.map(item => item.request_id)
    }

    create(data) {
        return this.database.Approval.create({
            request_id: data.request_id,
            approver_id: data.approver_id,
            status: data.status,
            description: data.description
        });
    }

    getById(id) {
        return this.database.Approval.findOne({
            where: {
                request_id: id
            }
        });
    }

    update(id, data) {
        return this.database.Approval.update({
                status: data.status,
                description: data.description
            },
            {
                where: {
                    request_id: id
                }
            });
    }

    delete(id) {
        return this.database.Approval.destroy({
            where: {
                approver_id: id
            }
        });
    }

}

module.exports = ApprovalRepository;
