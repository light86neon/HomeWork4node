const { Schema, model } = require('mongoose');

const { dataBaseTablesEnum: { USER } } = require('../../constant');

const carSubScheme = {
    model: { type: String },
    price: { type: Number },
    producer: { type: String }
};

const userSchema = new Schema({
    name: {
        type: String, required: true, minlength: 3, maxlength: 20
    },
    email: {
        type: String, required: true, minlength: 5, maxlength: 30
    },
    password: {
        type: String, required: true, minlength: 5, maxlength: 30
    },
    cars: [carSubScheme]
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });


module.exports = model(USER, userSchema);
