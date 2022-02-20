/**
 * File: business.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-19
 */

let express = require("express");
let router = express.Router();
let businessController = require("../controllers/business");

function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    req.session.url = req.originalUrl;
    return res.redirect("/users/signin");
  }
  next();
}

//Get display add page. CREATE
router.get("/add", requireAuth, businessController.DisplayAddPage);

//Post process the add page. CREATE
router.post("/add", requireAuth, businessController.ProcessAddPage);

//Get businessList page. READ
router.get("/", businessController.DisplayBusinessList);

//Get display edit page. UPDATE
router.get("/edit/:id", requireAuth, businessController.DisplayEditPage);

//Post process the edit page. UPDATE
router.post("/edit/:id", requireAuth, businessController.ProcessEditPage);

//Get process the delete page. DELETE
router.get("/delete/:id", requireAuth, businessController.ProcessDeletePage);

module.exports = router;
