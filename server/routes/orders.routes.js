const {Router} = require('express');
const router = Router();
const Orders = require('../models/Orders');

router.post('/add', async (req, res) => {
    try {
        const fields = req.body;

        const newOrder = await new Orders(fields);
        await newOrder.save();

        res.status(201).send(newOrder);
    } catch (e) {
        res.status(400).json({message: e})
    }
})

module.exports = router;