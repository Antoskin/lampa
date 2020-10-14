const {Router} = require('express');
const router = Router();
const Orders = require('../models/Orders');

router.get('/list', async (req, res) => {
    try {
        const ordersList = await Orders.find({});
        res.status(200).send(ordersList);
    } catch (e) {
        res.status(400).json({message: e})
    }
})


router.post('/add', async (req, res) => {
    try {
        const fields = req.body;

        const newOrder = await new Orders(fields);
        await newOrder.save();

        res.status(201).json({message: 'success'});
    } catch (e) {
        res.status(400).json({message: e})
    }
})

module.exports = router;