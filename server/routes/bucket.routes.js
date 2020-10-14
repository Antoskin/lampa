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
    const {id} = req.body;

    try {
        let isExists = await Bucket.findByIdAndUpdate(id, {$inc: {'count': 1}});

        if (isExists) {
            await isExists.save();

            const updatedList = await Bucket.find({});

            return res.status(200).send(updatedList);
        }

        const {_id, amount, title, description, thumbnail} = await Product.findById(id);
        const product = new Bucket({_id, amount, title, description, thumbnail});

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
