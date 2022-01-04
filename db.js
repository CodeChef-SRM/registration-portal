const mongoose = require('mongoose');
const MongoURI = 'mongodb://localhost:27017/codetoscore?readPreference=primary&appname=MongoDB%20Compass&ssl=false'

// Function to connect to Database
const connectToMongo = () => {
    mongoose.connect(MongoURI, () => {
        console.log('Connected to the mongo database.......');
    })
}

module.exports = connectToMongo;