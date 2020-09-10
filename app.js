const express = require('express');
const app = express();
const config = require('config');
const port = config.get('port.portName');
const bodyParser = require('body-parser');
const router = require('./routes');
const ErrorService = require('./services/ErrorService');
const cookieSession = require('cookie-session');
const cookieKey = config.get('secret.cookieKey');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieSession({
    secret: cookieKey,
    maxAge: 30 * 24 * 60 * 60 * 1000
}));

app.use(router);

// error-handling middleware function
app.use((err, req, res, next) => ErrorService.consoleErr(err, res));

app.listen(port, () => {
    console.log(`Web server listening on port ${port}!`)
});

module.exports = app;
