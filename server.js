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
let ServiceLoader = require('./Services/ServiceLoader');

let microservice = process.argv.slice(2)[0];

if (microservice !== undefined && ServiceLoader[microservice] !== undefined) {

    const service = require(ServiceLoader[microservice]);
    service();

    global.server.listen(config.api.port, () => {
        console.log("server is up");
    });


}else{
    console.log("Your selected service is not here :) ")
}



