/**
 * File: db.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-12
 */

let URI = "mongodb+srv://AljohnN:Winter2022@cluster229w22.6pmlg.mongodb.net/COMP229?retryWrites=true&w=majority";

let mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect(URI);

    let mongoDB = mongoose.connection;
    mongoDB.on('error', console.error.bind(console, 'Connection Error'));
    mongoDB.once('open', () => {
        console.log('Connected to MongoDB');
    });
}