'use strict';

var systemCtrl = require('../controllers/system.server.controller'),
    systemPolicy = require('../policies/system.server.policy');

module.exports = function (app) {

    //System's collections routes
    app.route('/api/systems')
        .get(systemPolicy.isAllowed, systemCtrl.list)
        .post(systemPolicy.isAllowed, systemCtrl.create);

    //Single system routes
    app.route('/api/systems/:systemId')
        .get(systemPolicy.isAllowed, systemCtrl.read)
        .put(systemPolicy.isAllowed, systemCtrl.update)
        .delete(systemPolicy.isAllowed, systemCtrl.delete);

    // Finish by binding the system middleware
    app.param('systemId', systemCtrl.systemByID)
};
