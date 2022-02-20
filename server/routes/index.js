/**
 * File: index.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-19
 */

let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.DisplayHomePage);

/* GET home page. */
router.get("/home", indexController.DisplayHomePage);

/* GET Project page. */
router.get("/project", indexController.DisplayProjectPage);

/* GET Services page. */
router.get("/services", indexController.DisplayServicesPage);

/* GET About page. */
router.get("/about", indexController.DisplayAboutPage);

/* GET Contact page. */
router.get("/contact", indexController.DisplayContactPage);

module.exports = router;
