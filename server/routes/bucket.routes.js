const {Router} = require('express');
const router = Router()
const Bucket = require('../models/Bucket');
const Product = require('../models/Product');

router.get('/list', async (req, res) => {
    try {
        const bucketList = await Bucket.find({});
        res.status(200).send(bucketList);
    } catch (e) {
        res.status(400).json({message: e})
    }
})

router.post('/add', async (req, res) => {
    try {
        const {id, count} = req.body;

        const isExists = await Bucket.findOne({ productId: id });

        if (isExists) {
            return res.status(400).json({
                message: 'already in the bucket!!!'
            })
        }

        const {_id, title, description,amount, thumbnail} = await Product.findById(id);
        const product = new Bucket({productId: _id, title, description, amount, thumbnail, count: 1});

        await product.save();

        res.status(201).send(product);
    } catch (e) {
        res.status(400).json({message: e});
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const product = await Bucket.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(400).send()
        }

        const updatedList = await Bucket.find({});

        res.status(201).send(updatedList)
    } catch (e) {
        res.status(400).json({message: e})
    }
})

module.exports = router;
