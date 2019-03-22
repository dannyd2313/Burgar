// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server userful functionality
// ==============================================================================
var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
var app = express();

// ==============================================================================
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
// ==============================================================================
var PORT = process.env.PORT || 8080;

// ==============================================================================
// Use the express.static middleware to serve static content for the app from the "public" directory
// ==============================================================================
app.use(express.static(__dirname + "./public"));

// ==============================================================================
// Sets up the app to handle data parsing
// ==============================================================================
app.use(express.urlencoded({ extended: true }));

// ==============================================================================
// to use _method
// ==============================================================================
app.use(methodOverride("_method"));

// ==============================================================================
// Set Handlebars as the default templating engine.
// ==============================================================================
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

 
var routes = require("./controllers/burger_controller.js");
app.use("/", routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});