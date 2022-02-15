/**
 * File: local.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-14
 */

let passport = require('passport');
let LocalStrategy = require('passport-local');
let User = require('../models/user');

module.exports = function() {
    passport.use(new LocalStrategy(authLocal));
};

function authLocal(username, password, done) {
    User.findOne({ username: username }, (err, user) => {
        if (err)
            return done(err);
        if (!user)
            return done(null, false, { message: 'User no found' });
        if (!user.authenticate(password))
            return done(null, false, { message: "Invalid password" });
        return done(null, user);
    });
}