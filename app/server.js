// ==============================================================================
// DEPENDENCIES
// Series of npm packages needed
// ==============================================================================

var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json()); //TA question - do I need this?
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.text()); //TA question - do I need this?
app.use(bodyParser.json({type:'application/vnd.api+json'})); //TA question - do I need this?


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


//TO-DO - helper file https://github.com/Garcila/basic-siri-node/blob/master/app/helpers/helpers.js