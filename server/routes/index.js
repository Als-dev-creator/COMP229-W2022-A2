/**
 * File: index.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-12
 */

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
    res.render('index', { title: 'About' });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
    res.render('index', { title: 'Project' });
});

/* GET Service page. */
router.get('/services', function(req, res, next) {
    res.render('index', { title: 'Services' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
    res.render('index', { title: 'Contact' });
});



module.exports = router;