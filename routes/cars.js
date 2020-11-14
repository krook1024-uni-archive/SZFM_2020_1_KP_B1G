const express = require("express"),
    router = express.Router();

const carController = require("../controllers/carController")();

router.get("/", (req, res) => {
    const cars = carController.findAll().then((cars) => {
        console.log(cars);
        res.json(cars);
    });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const car = carController.findOne(id).then((car) => {
        res.json(car);
    });
});

module.exports = router;
