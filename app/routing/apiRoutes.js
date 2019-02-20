// this will help app connect to data
/* A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.*/

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on questions, matching friends, etc.
// ===============================================================================

var friendsData = require("../data/friendsData");//TO-DO - questions
//var surveyData = require("../data/surveyData"); // TO-DO m- survey answers


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
    res.json(friendsData);
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
   console.log("Testing 123");
  });

};
