const mongoose = require('mongoose');

const DbConnect = () => {
    
    const MONGO_CONNECTION_URL = process.env.MONGO_CONNECTION_URL;
    // Database connection
    mongoose.connect(MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Database connected...');
    });
}

module.exports = DbConnect;