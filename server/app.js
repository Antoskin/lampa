const express = require('express');
const cors = require('cors');
require ('./db/mongoose');
const config = require('config');

const app = express();

app.use(express.json({extended: true}));

app.use(cors());

const PORT = config.get('port');

app.use('/api/product', require('./routes/product.routes'));
app.use('/api/bucket', require('./routes/bucket.routes'));

app.get('/', (req, res) => {
    res.status(200).json({message: 'it works'})
})

app.listen(PORT, () => {
    console.log(`port: ${PORT}`)
})