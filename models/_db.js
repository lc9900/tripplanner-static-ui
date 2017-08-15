const Sequelize = require('sequelize');
const dbUrl = process.env.DATABASE_URL || 'postgres://localhost/tripplanner';
const db = new Sequelize(dbUrl);
module.exports = db;
