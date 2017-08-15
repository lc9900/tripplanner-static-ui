const db = require('./_db');
const Sequelize = db.Sequelize;

const Hotel = db.define('hotel', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    amenities: {
        type: Sequelize.STRING
    }
});

module.exports = Hotel;
