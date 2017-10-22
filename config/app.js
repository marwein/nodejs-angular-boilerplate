var dotenv = require('dotenv');
dotenv.load();

var app = {
    secret: process.env.APP_SECRET,
    port: process.env.APP_PORT
};

module.exports = app;