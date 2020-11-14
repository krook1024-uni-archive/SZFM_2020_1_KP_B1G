const express = require("express"),
  router = express.Router();

const carController = require("../controllers/carController")();

//CREATE ONE
router.post("/", (req, res) => {
  const car = carController.insertOne(req.body).then((car) => {
    res.json(car);
  });
});

//READ ALL
router.get("/", (req, res) => {
  carController.findAll().then((cars) => {
    res.json(cars);
  });
});

//READ ONE
router.get("/:id", (req, res) => {
  const id = req.params.id;
  carController.findOne(id).then((car) => {
    res.json(car);
  });
});

//UPDATE ONE
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const car = carController.updateOne(id, req.body).then((car) => {
    res.json(car);
  });
});

// DELETE ONE
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const car = carController.deleteOne(id).then((car) => {
    res.json({ message: "Car deleted!" });
  });
});

module.exports = router;
