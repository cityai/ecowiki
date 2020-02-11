class ExtError extends Error{
    constructor(status, reason){
        super();

        this.status = status;
        this.reason = reason;
    }
}

module.exports = ExtError;