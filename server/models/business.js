/**
 * File: business.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-12
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Model = mongoose.model;

let businessModel = new Schema({
        name: String,
        number: Number,
        email: String
    }, {
        collection: "business"
    }

);

module.exports.Model = Model('Business', businessModel);