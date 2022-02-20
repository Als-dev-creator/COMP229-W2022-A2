/**
 * File: index.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last Updated: 2022-02-19
 */

module.exports.DisplayHomePage = function (req, res, next) {
  res.render("index", {
    title: "Home",
    userName: req.user ? req.user.username : "",
  });
};

module.exports.DisplayProjectPage = function (req, res, next) {
  res.render("index", {
    title: "Project",
    userName: req.user ? req.user.userName : "",
  });
};

module.exports.DisplayServicesPage = function (req, res, next) {
  res.render("index", {
    title: "Services",
    userName: req.user ? req.user.userName : "",
  });
};

module.exports.DisplayAboutPage = function (req, res, next) {
  res.render("index", {
    title: "About",
    userName: req.user ? req.user.userName : "",
  });
};

module.exports.DisplayContactPage = function (req, res, next) {
  res.render("index", {
    title: "Contact",
    userName: req.user ? req.user.userName : "",
  });
};
