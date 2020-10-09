const {Router} = require('express');
const router = Router();
const Product = require('../models/Product');

router.get('/list', async (req, res) => {
    try {
        const productList = await Product.find({});

        res.status(200).send(productList);
    } catch (e) {
        res.status(400).json({message: e})
    }
})

router.post('/bucket', async (req, res) => {
    try {
        const {ids} = req.body;

        const productsInBucket = await Product.find({_id: ids})

        res.status(200).send(productsInBucket);
    } catch (e) {
        res.status(400).json({message: e})
    }
})

router.post('/add', async (req, res) => {
    try {
        const {amount, title, description, thumbnail} = req.body;

        const product = new Product({
            title, description, amount, thumbnail
        })

        await product.save();

        res.status(201).json({message: 'product added successfully'})
    } catch (e) {
        res.status(500).json({message: `failure: product not added because -> ${e}`})
    }
})

module.exports = router;