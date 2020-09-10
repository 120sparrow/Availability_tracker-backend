const unless = require('express-unless');
const jwt = require('jsonwebtoken');
const config = require('config');
const container = require('../di');

module.exports = () => {
    const authorizationMiddleware = async (req, res, next) => {
        if (req.headers.authorization) {
            const decoded = jwt.verify(req.headers.authorization, config.get('secret.cookieKey'));
            if (decoded) {
                req.user = await container.UsersRepository.getById(decoded.id);
            } else {
                return res.sendStatus(401);
            }
        } else if (!req.user) {
            return res.sendStatus(401);
        }
        next()
    };
    authorizationMiddleware.unless = unless;
    return authorizationMiddleware;
};
