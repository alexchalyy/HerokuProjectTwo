//  This creates a new table to store orders.

module.exports = function(sequelize, DataTypes) {
  var Dish = sequelize.define("Dish", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    ready: { type: DataTypes.BOOLEAN, defaultValue: false },
    pickup: { type: DataTypes.BOOLEAN, defaultValue: false }
  });
  return Dish;
};
