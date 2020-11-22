const express = require("express"),
  router = express.Router(),
  passport = require("passport");

const userController = require("../controllers/userController")();
const userModel = require('../models/User');
const paginate = require('../middlewares/paginate');

passport.use("admin", require("../controllers/authAdminStrategy.js"));

// CREATE ONE
router.post(
  "/",
  passport.authenticate("admin", { session: false }),
  (req, res) => {
    userController.insertOne(req.body).then((user) => {
      res.json(user);
    });
  }
);

//READ ALL
router.get(
  "/",
  passport.authenticate("admin", { session: false }),
  paginate(userModel),
  (req, res) => {
    userController.findAll(req.sorting).then((users) => {
      res.json(users);
    });
  }
);

//READ ONE
router.get(
  "/:id",
  passport.authenticate("admin", { session: false }),
  (req, res) => {
    const id = req.params.id;
    userController.findOne(id).then((user) => {
      res.json(user);
    });
  }
);

//UPDATE ONE
router.put(
  "/:id",
  passport.authenticate("admin", { session: false }),
  (req, res) => {
    const id = req.params.id;
    userController.updateOne(id, req.body).then((user) => {
      res.json(user);
    });
  }
);

// DELETE ONE
router.delete(
  "/:id",
  passport.authenticate("admin", { session: false }),
  (req, res) => {
    const id = req.params.id;
    userController.deleteOne(id).then(() => {
      res.json({ message: "User deleted!" });
    });
  }
);

module.exports = router;
