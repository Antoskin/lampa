const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const schema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    }
})

module.exports = model('Product', schema);
