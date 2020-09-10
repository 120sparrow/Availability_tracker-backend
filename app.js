const express = require('express');
const app = express();
const config = require('config');
const port = config.get('port.portName');
const bodyParser = require('body-parser');
const router = require('./routes');
const ErrorService = require('./services/ErrorService');
const cookieSession = require('cookie-session');
const cookieKey = config.get('secret.cookieKey');
const db = require('./models');
const passport = require('passport');
const auth = require('./auth');
const authorizationMiddleware = require('./middleware/authorization');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// passport.js auth and cookie
app.use(cookieSession({
    secret: cookieKey,
    maxAge: 30 * 24 * 60 * 60 * 1000
}));

auth(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1', authorizationMiddleware().unless({
    path: [
        /\/auth/,
        '/api/v1/users/profile'
    ]
}));

app.use(router);

// error-handling middleware function
app.use((err, req, res, next) => ErrorService.consoleErr(err, res));

db.sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.....');
            app.listen(port, () => {
                console.log(`Web server listening on port ${port}!`)
            });
        })
        .catch(err => {
            console.error('Unable to connect to the database: ' + err);
        });

module.exports = app;
