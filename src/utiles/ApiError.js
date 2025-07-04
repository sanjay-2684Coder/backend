class ApiError extends Error {
    constructor(
        statusCode,
        message = "something wrong",
        errors = [],
        statck = ""
    ){
       super(message)
       this.statusCode = statusCode
       this.data = null
       this.message = message
       this.success = false;
       this.errors = this.errors 
    

    if(statck){
        this.stack = statck
    }
    else{
        Error.captureStackTrace(this,this.construtor)
    }
  }
}
export {ApiError}