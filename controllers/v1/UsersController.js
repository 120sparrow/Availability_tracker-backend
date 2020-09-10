class UsersController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    list(req, res) {
        this.usersRepository.list()
            .then(result => res.status(200).json(result))
    }

    getProfile(req, res) {
        if (!req.user) {
            return res.status(404).json(null)
        }
        this.usersRepository.getIsUserManager(req.user.id)
            .then(result => res.status(200).json(Object.assign(
                req.user.dataValues, {isManager: !!result}
            )))
    }

    getManager(req, res) {
        this.usersRepository.getManagerById(req.params.id)
            .then(result => res.status(200).json(result))
    }

    getUser(req, res) {
        this.usersRepository.getById(req.params.id)
            .then(result => res.status(200).json(result))
    }


    logout(req, res) {
        req.logout()
        res.redirect('/')
    }

    authSuccessfull(req, res) {
        res.redirect('/')
    };

}

module.exports = UsersController;
