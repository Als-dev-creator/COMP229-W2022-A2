/**
 * File: user.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-12
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Model = mongoose.Model;

let userModel = Schema({
    username: String,
    email: String,
    displayName: String,
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: "users"
});

module.exports.Model = Model('User', userModel);