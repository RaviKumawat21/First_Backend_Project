class ApiError extends Error {
    constructor(statusCode,
         message = `Something went wrong`,
         errors = [],
         statck = "") {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.errors = this.errors;
        this.sucess = false;s
        
        if(statck){
            this.statck = statck;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError};