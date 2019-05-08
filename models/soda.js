const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SodaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: [0, 'Sorry, number must be above 0.'],
        max: [10, 'Nothing abovoe 10!'],
        required: true
    }
});

module.exports = mongoose.model('Soda', SodaSchema);