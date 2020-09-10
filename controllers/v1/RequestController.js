class RequestController {
    constructor(requestRepository) {
        this.requestRepository = requestRepository;
    }

    list(req, res) {
        this.requestRepository.list()
            .then(result => res.status(200).json(result))
    }

    create(req, res) {
        this.requestRepository.create(
            Object.assign(req.body, {user_id: req.user.id})
        )
            .then(result => res.status(200).json(result))
    }

    getById(req, res) {
        this.requestRepository.getById(req.params.id)
            .then(result => res.status(200).json(result))
    }

    getByUserId(req, res) {
        this.requestRepository.getByUserId(req.user.id)
            .then(result => res.status(200).json(result))
    }

    getType(req, res) {
        this.requestRepository.getType()
            .then(result => res.status(200).json(result))
    }

    getNeedApproval(req, res) {
        this.requestRepository.getNeedApproval(req.user.id)
            .then(result => res.status(200).json(result))
    }

    getByDate(req, res) {
        this.requestRepository.getByDate(req.params)
            .then(result => res.status(200).json(result))
    }

    update(req, res) {
        this.requestRepository.update(req.params.id, req.body)
            .then(result => res.status(200).json(result))
    }

    delete(req, res) {
        this.requestRepository.delete(req.params.id)
            .then(result => res.status(200).json(result))
    }

}

module.exports = RequestController;
