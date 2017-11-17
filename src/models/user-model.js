const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    document: {
        type: String,
        required: true
    },
    Address: {
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        adjunct: {
            type: String,
            required: false
        }
    }
});

module.exports = mongoose.model('User', schema);