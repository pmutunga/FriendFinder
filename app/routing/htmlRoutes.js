// This will help direct user to correct page
//A GET Route to /survey which should display the survey page.
//A default, catch-all route that leads to home.html which displays the home page.

// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path"); //Question for TA - how come we don't require express here? How does the app "know" that app is express?


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // app.get("/survey", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/survey.html"));
  // });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  /*app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });*/

  app.use(function(req, res){
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });

   //post 

   app.post("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));// TA question - use res.Redirect?
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
