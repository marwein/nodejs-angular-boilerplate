var mongoose = require('mongoose');
var validators = require('mongoose-validators');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true,
        unique: true,
        validate: [validators.isAlphanumeric(), validators.isLength(8, 20)]
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: validators.isEmail()
    },
    messages:[{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

schema.plugin(mongooseUniqueValidator, validators);

module.exports = mongoose.model('User', schema)
