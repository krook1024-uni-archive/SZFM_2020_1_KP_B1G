const express = require("express"),
  router = express.Router();

const userController = require("../controllers/userController")();

// CREATE ONE
router.post("/", (req, res) => {
  userController.insertOne(req.body).then((user) => {
    res.json(user);
  });
});

//READ ALL
router.get("/", (req, res) => {
  userController.findAll().then((users) => {
    res.json(users);
  });
});

//READ ONE
router.get("/:id", (req, res) => {
  const id = req.params.id;
  userController.findOne(id).then((user) => {
    res.json(user);
  });
});

//UPDATE ONE
router.put("/:id", (req, res) => {
  const id = req.params.id;
  userController.updateOne(id, req.body).then((user) => {
    res.json(user);
  });
});

// DELETE ONE
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  userController.deleteOne(id).then(() => {
    res.json({ message: "User deleted!" });
  });
});

module.exports = router;
