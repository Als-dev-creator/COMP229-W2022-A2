/**
 * File: index.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last Updated: 2022-02-12
 */

module.exports.DisplayHomePage = (req, res, next) => {
    res.render('index', {
        title: Home,
        userName: req.user ? req.user.userName : ''
    });
}

module.exports.DisplayProjectPage = (req, res, next) => {
    res.render('project', {
        title: 'Project',
        userName: req.user ? req.user.userName : ''
    });
}

module.exports.DisplayServicesPage = (req, res, next) => {
    res.render('services', {
        title: 'Services',
        userName: req.user ? req.user.userName : ''
    });
}

module.exports.DisplayAboutPage = (req, res, next) => {
    res.render('services', {
        title: 'Services',
        userName: req.user ? req.user.userName : ''
    });
}

module.exports.DisplayContactPage = (req, res, next) => {
    res.render('services', {
        title: 'Services',
        userName: req.user ? req.user.userName : ''
    });
}