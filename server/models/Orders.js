const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    orders: [{
        productId: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            default: 1
        }
    }]
})

module.exports = model('Orders', schema);