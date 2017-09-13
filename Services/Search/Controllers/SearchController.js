"use strict";

const SuccessResponse = require("../../../Responses/SuccessResponse"),
    ErrorResponse = require("../../../Responses/ErrorResponse");


module.exports = {
    'getExampleList': (request, response, next) => {

        let res = new SuccessResponse(response, next);
        res.fill({'t': 'd'});
        return res.send();

    },
    'postExample': (request, response, next) => {

        let res = new ErrorResponse(response, next);
        res.fill({'t': 'd'});
        return res.send();

    }
}