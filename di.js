const Bottle = require('bottlejs');
const di = new Bottle();
const Database = require('./models');
const UsersRepository = require('./services/repositories/UsersRepository');
const UsersController = require('./controllers/v1/UsersController');
const RequestRepository = require('./services/repositories/RequestRepository');
const RequestController = require('./controllers/v1/RequestController');
const ApprovalRepository = require('./services/repositories/ApprovalRepository');
const ApprovalController = require('./controllers/v1/ApprovalController');

di.factory('Database', () => Database);
di.service('UsersRepository', UsersRepository, 'Database');
di.service('UsersController', UsersController, 'UsersRepository');
di.service('RequestRepository', RequestRepository, 'Database');
di.service('RequestController', RequestController, 'RequestRepository');
di.service('ApprovalRepository', ApprovalRepository, 'Database');
di.service('ApprovalController', ApprovalController, 'ApprovalRepository');

module.exports = di.container;
