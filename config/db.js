var dotenv = require('dotenv');
dotenv.load();

var db = {
    url: process.env.HOST,
    base: process.env.BASE
};

module.exports = db;