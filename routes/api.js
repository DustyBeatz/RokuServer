const express = require('express');
///express router handles incoming requests and drects them where they need 
//to go like a traffic cop
const router = express.Router();

//think of route handlers like PHP functions
router.get("/",(req, res) => {
    //res.json = echo json_encode(...) in php
    res.json({message: "You hit the api route"});
});
//this is the /api/users route handler


//this is a dynamic route handler that can accept a parameter
router.get("/movies", (req, res) =>{
    //run sql query here -> get all movies from my DB
    // res.json()
    //echo a message -- just like PHP 
    res.json({message: "get movies route"});
});
// $_GET["id"] is the same as this:
//youre passing the id via the route: /api/movies1, /api/movies/20, etc
router.get("/movies/:id", (req, res) =>{
    //run sql query here -> get all movies from my DB
    // res.json()
    //echo a message -- just like PHP 
    res.json({message: "get one movies route", movie :req.params.id});
});

module.exports = router;