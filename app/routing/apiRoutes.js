    
// imports the friend file to use the array
var listOFriends = require("../data/friends.js");

// Function to export GET and POST to the server file
module.exports = function (app) {
    // GET the info from /api/friends path and returns it in JSON format
    app.get("/api/friends", function (req, res) {
        res.json(listOFriends);
        
    });

    // puts new info into the friends array 
    app.post("/api/friends", function (req, res) {
        listOFriends.push(req.body);
        res.json(true);
    })
    
}