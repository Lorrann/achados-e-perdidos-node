const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model('Object', schema);