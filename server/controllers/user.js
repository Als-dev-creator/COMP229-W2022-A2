/**
 * File: user.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-19
 */

let User = require("../models/user");
let passport = require("passport");

function getErrorMessage(err) {
  console.log("===> Erro: " + err);
  let message = "";

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = "Username already exists";
        break;
      default:
        message = "Something went wrong";
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }
  return message;
}

module.exports.DisplaySignup = function (req, res, next) {
  if (!req.user) {
    let newUser = User();
    res.render("auth/signup", {
      title: "Sign-up Form",
      messages: req.flash("error"),
      user: newUser,
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.ProcessSignup = function (req, res, next) {
  if (!req.user) {
    let user = new User(req.body);

    user.save((err) => {
      if (err) {
        let message = getErrorMessage(err);

        req.flash("error", message);
        return res.render("auth/signup", {
          title: "Sign-up Form",
          messages: req.flash("error"),
          user: user,
        });
      }
      req.login(user, (err) => {
        if (err) return next(err);
        return res.redirect("/");
      });
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.DisplaySignin = function (req, res, next) {
  if (!req.user) {
    res.render("auth/signin", {
      title: "Sign-in Form",
      messages: req.flash("error") || req.flash("info"),
    });
  } else {
    console.log(req.user);
    return res.redirect("/business-list");
  }
};

module.exports.ProcessSignin = function (req, res, next) {
  passport.authenticate("local", {
    successRedirect: req.session.url || "/",
    failureRedirect: "/users/signin",
    failureFlash: true,
  })(req, res, next);
  delete req.session.url;
};

module.exports.signout = function (req, res, next) {
  req.logout();
  res.redirect("/");
};
