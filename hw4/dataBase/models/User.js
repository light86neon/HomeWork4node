const { Schema, model } = require('mongoose');
const errorMessage = require('../../error/error.messages');

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

userSchema.virtual('full_name').get(function() {
    const lastName = 'Ishumitsu';
    return `${this.name} ${lastName}`;
});

userSchema.virtual('userCars', {
    ref: 'Car',
    localField: 'cars',
    foreignField: '_id'
});

userSchema
    .pre('find', function() {
        console.log('PRE FIND HOOK');
        this.populate(errorMessage.PRE_FIND_HOOK);
    })
    .pre('findOne', function() {
        console.log(errorMessage.PRE_FIND_ONE_HOOK);
        this.populate('userCars');
    });
module.exports = model('User', userSchema);
