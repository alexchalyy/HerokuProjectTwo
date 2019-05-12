//  Those are html routes for Deli website.

var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/orders", function(req, res) {
    db.Dish.findAll({}).then(function(dbDishes) {
      res.render("index", {
        msg: "Welcome!",
        dishes: dbDishes
      });
    });
  });

  app.get("/", function(req, res) {
    console.log("here");
    db.Dish.findAll({}).then(function(dbDishes) {
      console.log("here");
      res.render("home", {
        msg: "Welcome!",
        dishes: dbDishes
      });
    });
  });
  
  // render the menu page
  app.get("/menu", function(req, res) {
    res.render("menu");
  });

  app.get("/ready", function(req, res) {
    db.Dish.findAll({}).then(function(dbDishes) {
      res.render("ready", {
        msg: "Welcome!",
        dishes: dbDishes
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
