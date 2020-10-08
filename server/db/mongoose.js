const mongoose = require('mongoose');
const config = require('config');

const mongooseUri = config.get('mongoUri');

mongoose.connect(mongooseUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})