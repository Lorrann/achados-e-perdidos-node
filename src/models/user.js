const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const saltRounds = 10;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    },
    Admin: {
        type: Boolean,
        required: false
    },
    Email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


schema.pre('save', function(next) {
    bcrypt.genSalt(saltRounds)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => this.password = hash)
        .then(() => next())
        .catch(next)

    // bcrypt.genSalt(saltRounds, (err, salt) => 
    // {
    //     if (err) return next(err);

    //     bcrypt.hash(this.password, salt, (err, hash) => {
    //         if (err) return next(err);

    //         this.password = hash;
    //         next();
    //     });
    // });
});

module.exports = mongoose.model('User', schema);