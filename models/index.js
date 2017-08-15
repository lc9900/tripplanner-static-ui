const db = require('./_db')
const Sequelize = db.Sequelize;
const Restaurant = require('./restaurant');
const Activity = require('./activity');
const Place = require('./place');
const Hotel = require('./hotel');
const utils = require('../utils');

// const conn = new Sequelize(process.env.DATABASE_URL);

// const Foo = conn.define('foo', {});

const sync = ()=> {
  return db.sync();
};



Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

const retrieveAll = function(){
    return Promise.all([
                            Activity.findAll(),
                            Hotel.findAll(),
                            Restaurant.findAll(),
                       ]).then(results => {
                            return results;
                       })
}

module.exports = {
  sync, retrieveAll
};


// Test Code
// sync().then(() => {
//     utils.inform('Database Synced');
// })
