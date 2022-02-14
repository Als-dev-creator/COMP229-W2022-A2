/**
 * File: index.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last Updated: 2022-02-12
 */

let express = require('express');
let router = express.Router();

let userModel = require('../models/user');
let User = userModel.Model;

module.exports.DisplayHomePage = (req, res, next) => {
    res.render('index', { title: Home, displayName: req.user ? req.user.displayName : '' });
}

module.exports.DisplayProjectPage = (req, res, next) => {
    res.render('project', { title: 'Project', displayName: req.user ? req.user.displayName : '' });
}

module.exports.DisplayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services', displayName: req.user ? req.user.displayName : '' });
}

module.exports.DisplayAboutPage = (req, res, next) => {
    res.render('services', { title: 'Services', displayName: req.user ? req.user.displayName : '' });
}

module.exports.DisplayContactPage = (req, res, next) => {
    res.render('services', { title: 'Services', displayName: req.user ? req.user.displayName : '' });
}