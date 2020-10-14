const {Router} = require('express');
const router = Router()
const Bucket = require('../models/Bucket');
const Product = require('../models/Product');

router.get('/list', async (req, res) => {
    try {
        const productList = await Bucket.find({});
        res.status(200).send(productList);
    } catch (e) {
        res.status(400).json({message: e})
    }
})

router.post('/add', async (req, res) => {
    try {
        //increment product
        const incrementedProduct = await Bucket.findByIdAndUpdate(
                req.body.id, {$inc: {'count': 1}});

        if (incrementedProduct) {
            const updatedList = await Bucket.find({});
            return res.status(200).send(updatedList);
        }

        //add new product to bucket
        const {_id, amount, title, description, thumbnail} = await Product.findById(req.body.id),
            product = new Bucket({_id, amount, title, description, thumbnail});
            await product.save();
        const updatedList = await Bucket.find({})

        res.status(201).send(updatedList);
    } catch (e) {
        res.status(400).json({message: e});
    }
})

router.post('/delete', async (req, res) => {
    try {
        const { id, count } = req.body;

        if (count === 0) { // delete from bucket
            await Bucket.findByIdAndDelete(id);
            const updatedList = await Bucket.find({});
            return res.status(200).send(updatedList)
        }

        // decrement product
        const decrementedProduct = await Bucket.findByIdAndUpdate(id, {$inc: {'count': -1}}, {
            new: true
        })

        // if count === 0 delete from bucket
        if (decrementedProduct.count <= 0) {
            await Bucket.findByIdAndDelete(decrementedProduct._id);
        }

        const updatedList = await Bucket.find({});

        res.status(200).send(updatedList);
    } catch (e) {
        res.status(400).json({message: e})
    }
})

module.exports = router;
