const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JuiceSchema = new Schema({
    fruit: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: [0, 'Nothing below 0!'],
        max: [10, 'Nothing above 10!'],
        required: true
    }
});

module.exports = mongoose.model('Juice', JuiceSchema);