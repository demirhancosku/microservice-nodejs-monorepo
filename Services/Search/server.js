'use strict';

const config = require('../../config'),
    restify = require('restify'),
    route = require('./Routes');


/**
 * Server
 */
global.server = restify.createServer({
    name: config.api.server
});


/**
 * Middleware
 */
global.server.use(restify.plugins.acceptParser(global.server.acceptable));
global.server.use(restify.plugins.queryParser());
global.server.use(restify.plugins.bodyParser());




/**
 * Load and init related route
 */

route();

global.server.listen(config.api.port, () => {
    console.log("server is up");
});

