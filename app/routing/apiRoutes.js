// this will help app connect to data
/* A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.*/

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on questions, matching friends, etc.
// ===============================================================================

var friends = require("../data/friends.js");//TO-DO - questions



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) { //TO-DO - update for friends
    res.json(friends);
  });


  // API POST Requests
  // This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  // Below code handles when a user submits the survey and thus submits data to the server.
  // In each of the below cases, when a user submits the survey form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey... this data is then sent to the server...
  // Then the server saves the data to the answersData array)

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
   console.log("Testing Server connection");

   var bestMatch = {
     name: "",
     photo: "",
     friendDifference: 1000 //used to track difference between ansswers
    };
   //take incoming survey results
   var userData = req.body;
   console.log("The server can see the user info: " + req.body);//how will apiRoutes know what userData is?
   //check for a match
   var userScores = userData.scores;
   console.log(userScores);
   //define a varaible that will track the difference between the user's score and the scores of 
   // each user in the friends array
   var totalDifference = 0;
   //loop through all friends in the array to get the total score. 
   for(var a = 0; a<friends.length; a++) {

    console.log(friends[a]);
    totalDifference = 0; // why do we need this again?

    //then loop through each friend's score

    for (var b = 0; b<friends[a].scores[b]; b++) {
     //if the sum of differences is less than the difference of the current "best match"

      totalDifference += Math.abs(parseInt(userScores[b]) - parseInt(friends[a].scores[b]));
      //reset the best match to be the new friend. This is like a bubble sort

        if(totalDifference <= bestMatch.friendDifference) {
            bestMatch.name = friends[a].name;
            bestMatch.photo = friends[a].photo;
            bestMatch.friendDifference = totalDifference;
          } //end of if statement
    } //end of friends[b].scores[b] for loop
  }// end of friends[a] for loop

   //push userData to FriendsData.js
   friends.push(req.body);
   //display match info in modal

res.json(bestMatch); //this will be used in the results modal for best match
});//end of post
}