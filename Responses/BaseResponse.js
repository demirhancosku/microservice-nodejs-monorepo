/**
 * Created by coskudemirhan on 22/07/2017.
 */

"use strict";

class BaseResponse {
    constructor(res,next) {
        this.res = res;
        this.next = next;
        this.res.header('content-type', 'json');
    }

    setData(data){
        this.data = data;
    }

    setError(boolError){
        this.error = boolError;
    }

    setStatus(status){
        this.res.status(status);
    }

    send(){
        this.res.send({error:this.error, data:this.data});
        return this.next();
    }

}


module.exports = BaseResponse;