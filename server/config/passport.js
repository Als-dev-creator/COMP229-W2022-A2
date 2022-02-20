/**
 * File: passport.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-19
 */

const passport = require("passport");

module.exports = function () {
  const User = require("../models/user");
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findOne({ _id: id }, "-password -salt", (err, user) => {
      done(err, user);
    });
  });

  require("./local")();
};
