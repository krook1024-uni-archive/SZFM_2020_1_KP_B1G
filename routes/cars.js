const express = require("express"),
  router = express.Router(),
  passport = require("passport");

const carController = require("../controllers/carController")();

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
