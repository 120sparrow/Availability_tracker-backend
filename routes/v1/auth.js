const router = require('express').Router();
const container = require('../../di');
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
}));
router.get('/google/callback',
        passport.authenticate('google', {failureRedirect:'/'}),
        container.UsersController.authSuccessfull.bind(container.UsersController)
);
router.get('/logout', container.UsersController.logout.bind(container.UsersController));

module.exports = router;
