/**
 * Created by coskudemirhan on 22/07/2017.
 */

"use strict";

const BaseResponse = require('./BaseResponse');

class NotFoundResponse extends BaseResponse{

    constructor (res,next) {
        super(res,next);
        this.setStatus(404);
        this.setError(false);
    }

    fill(data){
        this.setData(data);
    }

}

module.exports = NotFoundResponse;

