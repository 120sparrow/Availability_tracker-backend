const jwt = require('jsonwebtoken');
const assert = require('assert');
const config = require('config');
const app = require('../app');
const superTest = require('supertest');

const token = jwt.sign({
    id: 1
}, config.get('secret.cookieKey'));

module.exports = {
    token,
    superTest: superTest(app),
    assert
};