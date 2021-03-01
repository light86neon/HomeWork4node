const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String, required: true, minlength: 3, maxlength: 20
    },

    age: {
        type: Number, required: true, min: 1, max: 100
    },
});

module.exports = model('User', userSchema);
