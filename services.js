'use strict';

const config = require('./config'),
    restify = require('restify');


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
 * Service Loader will define which service will be run
 */
let ServiceLoader = require('./ServiceLoader');


for(let service of ServiceLoader.services){
    require(service)();
}

global.server.listen(config.api.port, () => {
    console.log("server is up");
});




