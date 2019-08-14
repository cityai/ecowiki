const mongoose = require('mongoose');
const env = process.env.NODE_ENV;
const config = require(`../../config/env/${env}.config.json`);


class SetupDBContext {
    constructor ( type ){
        switch ( type ){
            case "mongoose":
                this.strategy = new SetupMongooseDBStrategy();
            default:
                this.strategy = new SetupMongooseDBStrategy();
        }
    }
}

class SetupDBStrategy { 
    constructor ( options ) {
        this.options = options;
    }

    setStrategy( strategy ){
        this.strategy = strategy;
    }

    async setup( cb, errCb ){
        return await this.strategy.setup( cb, errCb );
    }
}

class SetupMongooseDBStrategy extends SetupDBStrategy{
    constructor(){
        super();
    }

    async setup( cb, errCb ){
        
        if(env === 'dev'){
            mongoose.set('debug', true);
        }
        
        return mongoose.connect(config.mongoUrl, {
            keepAlive: 1,
            useNewUrlParser: true
        })
        .then(() => {
            cb();
        })
        .catch(err => {
            errCb(err);
        });
    }
}

module.exports = { SetupDBContext, SetupDBStrategy };