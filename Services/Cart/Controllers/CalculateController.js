"use strict";

const SuccessResponse = require("../../../Responses/SuccessResponse"),
    ErrorResponse = require("../../../Responses/ErrorResponse");


module.exports = {
    'getCalculate': (request, response, next) => {

        let res = new SuccessResponse(response, next);
        res.fill({'test': 'dummy'});
        return res.send();

    },
    'getShippingFee': (request, response, next) => {

        let res = new ErrorResponse(response, next);
        res.fill({'test': 'dummy'});
        return res.send();

    }
}