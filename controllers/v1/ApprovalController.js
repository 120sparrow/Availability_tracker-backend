class ApprovalController {
    constructor(approvalRepository) {
        this.approvalRepository = approvalRepository;
    }

    list(req, res) {
        this.approvalRepository.list()
            .then(result => res.status(200).json(result))
    }

    create(req, res) {
        this.approvalRepository.create(req.body)
            .then(result => res.status(200).json(result))
    }

    getById(req, res) {
        this.approvalRepository.getById(req.params.request_id)
            .then(result => res.status(200).json(result))
    }

    update(req, res) {
        this.approvalRepository.update(req.params.id, req.body)
            .then(result => res.status(200).json(result))
    }

    delete(req, res) {
        this.approvalRepository.delete(req.params.id)
            .then(result => res.status(200).json(result))
    }

}

module.exports = ApprovalController;
