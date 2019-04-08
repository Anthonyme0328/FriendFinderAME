    
// imports the friend file to use the array
var friends = require("../data/friends.js");

// Function to export GET and POST to the server file
module.exports = function (app) {
    // GET the info from /api/friends path and returns it in JSON format
    app.get("/api/friends", function (req, res) {
        res.json(friends);
        
    });

    // puts new info into the friends array 
    app.post("/api/friends", function (req, res) {
        listOFriends.push(req.body);
        res.json(true);
    })
    
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////psuedo code///////////////////////////////////////////////////////////////////////

// use app.post method

// create varibles to store the user input from the submission
// empty variables to store the matches name and image

// for loop to loop through all match options/ scores

// second for loop to compare users input to the matches
// use math.abs so the scores equal the same distance if user input is negative or positive i.e (5-3, 3-5)

// if difference is less then the other options select that person and they are now the match

// res.json to send all apropriate data



/////////////////////////////////////////////////////////////////////////////////////////////////////////////


	// app.post('/api/friends', function(req, res) {

	// 	var userInput = req.body;
	// 	var userResponses = userInput.scores;
	// 	var matchName = '';
	// 	var matchImage = '';
	// 	var totalDifference = 250;

	// 	for (var i = 0; i < friends.length; i++) {
	// 		var diff = 0;
	// 		for (var j = 0; j < userResponses.length; j++) {
	// 			diff += Math.abs(friends[i].scores[j] - userResponses[j]);
	// 		}
	// 		if (diff < totalDifference) {
	// 			totalDifference = diff;
	// 			matchName = friends[i].name;
	// 			matchImage = friends[i].photoLink;
	// 		}
	// 	}

	
