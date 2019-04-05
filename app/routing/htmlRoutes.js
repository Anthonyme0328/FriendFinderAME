// Require path package
var path = require("path");



// function that is imported for use in the other files
module.exports = function (app) {
    // loads the home page when using the / root
    app.get("/", function (req, res) { 
        //. join puts all the file path parts together, dirname returns the path
        res.sendFile(path.join(__dirname + "/../public/home.html"));
        
    });


    // when going to survey page gets the survey itself
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });


    
};