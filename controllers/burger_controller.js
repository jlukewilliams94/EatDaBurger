const express = require("express");

const router = express.Router();

let burgers = require("../models/burger");

// Get current burgers
router.get("/", function(req,res){


});

//Create new burger
router.post("/api/burgers", function(req,res){


});

//Update Burger
router.put("/api/burgers/:id", function(req, res){


});

//Delete Burger

router.delete("/api/burgers/:id", function(req, res){

})

module.exports = router;