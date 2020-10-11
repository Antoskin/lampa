const {Router} = require('express');
const router = Router()
const Bucket = require('../models/Bucket');
const Product = require('../models/Product');

router.get('/list', async (req, res) => {
    try {
        const productIds = await Bucket.find({});
        const ids = productIds.map(({_id}) => _id);
        const bucketList = await Product.find({_id: ids});
        res.status(200).send(bucketList);
    } catch (e) {
        res.status(400).json({message: e})
    }
})

router.post('/add', async (req, res) => {
    try {
        const isExists = await Bucket.findOne({ _id: req.body.id });

        if (isExists) {
            return res.status(400).json({
                message: 'already in the bucket!!!'
            })
        }

        const {_id} = await Product.findById(req.body.id);
        const product = new Bucket({_id});

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
        const ids = updatedList.map(({_id}) => _id);
        const bucketList = await Product.find({_id: ids});

        res.status(201).send(bucketList)
    } catch (e) {
        res.status(400).json({message: e})
    }
})

module.exports = router;
