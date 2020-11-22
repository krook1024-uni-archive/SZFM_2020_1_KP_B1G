const express = require("express"),
  router = express.Router(),
  passport = require("passport");

const carController = require("../controllers/carController")();
const carModel = require("../models/Car");
const paginate = require("../middlewares/paginate");

passport.use("admin", require("../controllers/authAdminStrategy.js"));

//CREATE ONE
router.post(
  "/",
  passport.authenticate("basic", { session: false }),
  (req, res) => {
    carController.insertOne(req.body).then((car) => {
      res.json(car);
    });
  }
);

//READ ALL
router.get("/", paginate(carModel), (req, res) => {
  carController.findAll(req.sorting).then((cars) => {
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
router.put(
  "/:id",
  passport.authenticate("basic", { session: false }),
  (req, res) => {
    const id = req.params.id;
    carController.updateOne(id, req.body).then((car) => {
      res.json(car);
    });
  }
);

// DELETE ONE
router.delete(
  "/:id",
  passport.authenticate("basic", { session: false }),
  (req, res) => {
    const id = req.params.id;
    carController.deleteOne(id).then(() => {
      res.json({ message: "Car deleted!" });
    });
  }
);

module.exports = router;
