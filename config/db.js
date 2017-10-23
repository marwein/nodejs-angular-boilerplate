var dotenv = require('dotenv');
dotenv.load();

var db = {
    host: process.env.DB_HOST,
    base: process.env.DB_BASE
};

module.exports = db;