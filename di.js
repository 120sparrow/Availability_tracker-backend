const Bottle = require('bottlejs');
const di = new Bottle();
const Database = require('./models');

di.factory('Database', () => Database);

module.exports = di.container;
