const { SetupDBContext, SetupDBStrategy } = require('../setup/db/setupDBStrategy');

async function setup(){
    const context = new SetupDBContext( 'mongoose' );
    const mongoose = new SetupDBStrategy();
    mongoose.setStrategy( context.strategy );

    await mongoose.setup(
    () => {
        console.log("Connected to MongoDB.");
    },
    (err) => {
        console.log("Error connecting to MongoDB.");
        console.log(err);
    }
    );
}

module.exports = setup;