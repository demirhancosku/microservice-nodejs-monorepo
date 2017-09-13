"use strict";

const SuccessResponse = require("../../../Responses/SuccessResponse"),
    ErrorResponse = require("../../../Responses/ErrorResponse");


module.exports = {
    'getCart': (request, response, next) => {

        let res = new SuccessResponse(response, next);
        res.fill({'test': 'dummy'});
        return res.send();

    },
    'postAddProduct': (request, response, next) => {

        let res = new ErrorResponse(response, next);
        res.fill({'test': 'dummy'});
        return res.send();

    },
    'postRemoveProduct': (request, response, next) => {

        let res = new SuccessResponse(response, next);
        res.fill({'test': 'dummy'});
        return res.send();

    }
}