const express = require("express"),
  router = express.Router();

const userController = require("../controllers/userController")();

router.get("/", (req, res) => {
  const users = userController.findAll().then((users) => {
    res.json(users);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = userController.findOne(id).then((user) => {
    res.json(user);
  });
});

module.exports = router;
