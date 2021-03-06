/**
 * File: business.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-19
 */

let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Business = require('../models/business');



module.exports.DisplayBusinessList = (req, res, next) => {
    Business.Model.find((err, data) => {
        if (err) {
            console.error(err);
            res.end()
        } else {
            res.render('index', {
                title: 'Business List',
                business: data,
                name: req.user ? req.user.name : ''
            });
        }
    })

};

module.exports.DisplayAddPage = (req, res, next) => {

    res.render('content/business/add-business', {
        title: 'Add Business',
        userName: req.user ? req.user.username : '' 
    });          
};

module.exports.ProcessAddPage = (req, res, next) => {

    // instantiate a new object of type Component
    let business = Business.Model({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email

    });

    Business.Model.create(business, (err, Business) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        console.log(Business);
        res.redirect('/business-list');
    });
}

module.exports.DisplayEditPage = (req, res, next) => {
    let id = req.params.id;

    // pass id to the db 
    Business.Model.findById(id, (err, BusinessToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        // show the edit view
        res.render('index', {
            title: 'Edit Business',
            data: BusinessToEdit,
            name: req.user ? req.user.username : ''
        });
    });
};

module.exports.ProcessEditPage = (req, res, next) => {
    let id = req.params.id;

    // instantiate a new object of type Component
    let updatedBusiness = Business.Model({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Business.Model.updateOne({ _id: id }, updatedBusiness, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}

module.exports.ProcessDeletePage = (req, res, next) => {
    let id = req.params.id;

    Business.Model.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}