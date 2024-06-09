const express = require("express");
const { getproduct, getsingeltproduct } = require("../controler/productcontroler");

// Router is moduel 
const router = express.Router();

//router is used for merged

router.route('/product').get(getproduct)

// this used for singel product then id (parent) used in product because id is take kurupitta product take
router.route('/product/:id').get(getsingeltproduct)

//num 9 and 12 two file route export 

module.exports = router ;
