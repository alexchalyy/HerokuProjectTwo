//  Those are API CRUD routes to post user inputs to db.

var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/dishes", function (req, res) {
    db.Dish.findAll({}).then(function (dbDishes) {
      res.json(dbDishes);
    });
  });

  // Create a new example
  app.post("/api/dishes", function (req, res) {
    db.Dish.create(req.body).then(function (dbDish) {
      res.json(dbDish);
    });
  });

  // Create a new example
  app.put("/api/dishes/:id", function (req, res) {
    console.log("API update ID = " + req.params.id);
    db.Dish.update({
      ready: true
    },
    {
      where: {
        id: req.params.id
      }
    }
    ).then(function (dbDish) {
      res.json(dbDish);
    });
  });

  // Delete an example by id
  app.delete("/api/dishes/:id", function (req, res) {
    db.Dish.destroy({ where: { id: req.params.id } }).then(function (dbDish) {
      res.json(dbDish);
    });
  });
};

