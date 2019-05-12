// Written by Alex Chalyy, Ron Seide, Tori Farfak, and David Lawrence on 5/4/2019.
//
// Description: 
//
// This is deli order web site:
//
// 1.	User is navigated to index welcome page with menu and orders page 	links. If user clicks on menu, page in next step is opened. If user clicks 	orders, page from step 3 is opened.
//
// 2.	User selects the food item they would like to order from menu and 	clicks order.
//
// 3.	Afterwards, user is navigated to next page where queue of orders is 	displayed with food items that were ordered, price, index, and 	estimated time when the food would be ready (minutes) in processed 	column. 
//
// 4.	Every time the page is refreshed, the food item would be moved from 	processed column to ready for pick up column, if enough time has 	passed from its order time. There is also a pick up button in that 	column. If that button is clicked, order is removed from the page.

require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    helpers:{ moment: require("helper-moment") }
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.handlebars"));
});


   // prints `34e84d93de6a4650815e5420e0` to the console
   console.log(process.env.DELI_ID); 

   // prints `5162cd8b5cf940f48702df` to the console
   console.log(process.env.DELI_SECRET);
   // etc.


module.exports = app;
