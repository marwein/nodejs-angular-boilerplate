var dotenv = require('dotenv');
dotenv.load();

var app = {
    secret: process.env.SECRET,
    port: process.env.PORT
};

module.exports = app;