const router = require('express').Router();
const container = require(`../../di`);

router.get('/profile', container.UsersController.getProfile.bind(container.UsersController));
router.get('/list', container.UsersController.list.bind(container.UsersController));
router.get('/:id', container.UsersController.getUser.bind(container.UsersController));
router.get('/:id/manager', container.UsersController.getManager.bind(container.UsersController));

module.exports = router;
