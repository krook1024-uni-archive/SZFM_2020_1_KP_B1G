const express = require("express"),
    router = express.Router();

const carController = require("../controllers/carController")();

router.get("/", (req, res) => {
    const cars = carController.findAll();
    res.json(cars);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const car = carController.findOne(id);
    res.json(car);
});

module.exports = router;
