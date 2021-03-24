const express = require('express');
const app = express();

const port = process.env.PORT || 5050;

//this catches every route 
//everytime you change your location bar this function reaches and intercepts
//the route request
app.use((req, res, next) => {
    console.log('incoming request');
    console.log(process.env.PORT);
    

    //next is the original route request ie. /api/users
    next(); //=> send the user the route they requested
})

app.use("/api", require("./routes/api")); //when someone asks for the api route
//use the api file


// run the app at the PORT
app.listen(port, () => {
    console.log(`server is running on ${port}`); 
})