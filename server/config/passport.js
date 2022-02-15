/**
 * File: passport.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-14
 */


let passport = require('passport');

module.exports = function() {
    //save id property to the session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    //pwd salt???
    passport.deserializeUser((id, user) => {
        user.findOne({ _id: id },
            '-password -salt',
            (err, user) => {
                done(err, user);
            }
        );
    });
    require('./local')();
};