const express = require('express');
///express router handles incoming requests and drects them where they need 
//to go like a traffic cop
const router = express.Router();

//import the sql config file
const connect = require("../config/sqlConfig.js");

//think of route handlers like PHP functions
router.get("/",(req, res) => {
    //res.json = echo json_encode(...) in php
    res.json({message: "You hit the api route"});
});
//this is the /api/users route handler
router.get("/users", (req, res) =>{
    //run sql query here -> get all movies from my DB
    // res.json()
    //echo a message -- just like PHP 
    res.json({message: "get users route"});
})


//this is a dynamic route handler that can accept a parameter
router.get("/movies", (req, res) =>{
    //run sql query here -> get all movies from my DB
    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM tbl_movies', function (error, results) {
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;

          res.json({results});

       
        });
      });
    //echo a message -- just like PHP 
});
// $_GET["id"] is the same as this:
//youre passing the id via the route: /api/movies1, /api/movies/20, etc
router.get("/movies/:id", (req, res) =>{
    //run sql query here -> get all movies from my DB
    connect.query(`SELECT * FROM tbl_movies WHERE movies_id=${req.params.id}`, function (error, results, fields) {
        if (error) throw error;
        console.log('Results: ', results, "feilds:", fields);
        res.json(results);

      });
});
1
module.exports = router;