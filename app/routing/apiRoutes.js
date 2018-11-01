// Load Data
// =============================================================
var friends = require("../data/friends.js");


// Routes
// =============================================================
module.exports = function (app) {

    // API GET requests
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST requests
    app.post("/api/friends", function (req, res) {

        // Create variables for user's answers and app's calculations
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        // For loop through the friends array from friends.js
        for (i = 0; i < friends.length; i++) {
            var totalDifference = 0;

            for (j = 0; j < newFriendScores.length; j++) {
                // Subtract friends' answers against user's respective answer, create absolute value of total difference for each friend
                totalDifference += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
                // Push each total to the scores array
                scoresArray.push(totalDifference);
            }
        }

        // Friend with the score closest to 0 is your best friend
        for (i = 0; i <scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestFriend]) {
                bestFriend = i;
            }
        }
        res.json(friends[bestFriend]);

        // Add user to friends array
        friends.push(req.body);
    });
};