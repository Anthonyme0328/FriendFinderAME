// Require NPM express package
var express = require("express");
var path = require("path")
// Store express function in a variable
var app = express();

// if we're in the production environment, use process.env.Port
// else if we're in our development environment, use 3000
var PORT = process.env.PORT || 3000;


// parses data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// file routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//listener for the requests
app.listen(PORT, function (){
    console.log("Listening on port:" + PORT);

});