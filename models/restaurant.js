const db = require('./_db');
const Sequelize = db.Sequelize;

const Restaurant = db.define('restaurant', {
   name: {
    type: Sequelize.STRING,
    allowNull: false
   },
   cuisine: {
    type: Sequelize.TEXT,
   },
   price: {
    type: Sequelize.INTEGER
   }
});

module.exports = Restaurant;
