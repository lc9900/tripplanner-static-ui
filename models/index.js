const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const Foo = conn.define('foo', {});

const sync = ()=> {
  return conn.sync({ force: true });
};

// hotels: [
    // {name: "Andaz Wall Street", place: {address: "75 Wall St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705137, -74.007624]}, num_stars: 4, amenities: "Pool, Free Wi-Fi" },


const Restaurant = conn.define('restaurant', {
   name: {},
   cuisine: {},
   price: {}
});

const Activity = conn.define('activity', {
    name: {
        type: Sequelize
    },
    age_range: {}
});

const Place = conn.define('place', {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city:{
        type: Sequelize.STRING,
        allowNull: false
    },
    state:{
        type: Sequelize.STRING,
        allowNull: false
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    location:{
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull: false
    },
});

const Hotel = conn.define('hotel', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    amenities: {
        type: Sequelize.STRING
    }
});

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
  sync,
  models: {
    Foo
  }
};
