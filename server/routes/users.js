/**
 * File: users.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-19
 */

let express = require('express');
let router = express.Router();
let userController = require('../controllers/user')

// Sign-up
router.get('/signup', userController.DisplaySignup);
router.post('/signup', userController.ProcessSignup);

// Sign-in
router.get('/signin', userController.DisplaySignin);
router.post('/signin', userController.ProcessSignin);

// Sign out
router.get('/signout', userController.signout);

module.exports = router;