const mongoose = require('mongoose');

const {Schema, model} = mongoose

const schema = new Schema({
    _id: {
        type: String,
        required: true
    }
})

module.exports = model('Bucket', schema);
