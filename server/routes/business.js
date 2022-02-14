/**
 * File: business.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-12
 */

let express = require('express');
let router = express.Router();

let businessController = require('../controllers/business');


//Get display add page. CREATE
router.get('/add', businessController.DisplayAddPage);

//Post process the add page. CREATE
router.post('/add', businessController.ProcessAddPage);

//Get businessList page. READ
router.get('/', businessController.DisplayBusinessList);

//Get display edit page. UPDATE
router.get('/edit/:id', businessController.DisplayEditPage);

//Post process the edit page. UPDATE
router.post('/edit/:id', businessController.ProcessEditPage);

//Get process the delete page. DELETE
router.get('/delete/:id', businessController.ProcessDeletePage);

module.exports = router;