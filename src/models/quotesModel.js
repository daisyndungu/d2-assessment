const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Quote = new Schema({
    author: {type: String, require: true},
    year: {type: Number, require: true},
    quote: {type:String, require: true}
    });

module.exports = mongoose.model('quote', Quote);