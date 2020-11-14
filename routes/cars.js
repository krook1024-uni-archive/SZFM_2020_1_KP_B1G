const express = require("express"),
    router = express.Router();

const carController = require("../controllers/carController")();

router.get("/", (req, res) => {
    carController.findAll().then((cars) => {
        res.json(cars);
    });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    carController.findOne(id).then((car) => {
        res.json(car);
    });
});

module.exports = router;
