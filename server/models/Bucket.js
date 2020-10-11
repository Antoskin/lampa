const mongoose = require('mongoose');

const {Schema, model} = mongoose

const schema = new Schema({
    productId: {
        type: String,
        required: true
    },
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
    },
    count: {
        type: Number,
        required: true
    }
})

module.exports = model('Bucket', schema);
