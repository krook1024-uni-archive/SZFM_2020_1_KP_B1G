const express = require("express"),
  router = express.Router();

const rentController = require("../controllers/rentController")();

// CREATE ONE
router.post("/", (req, res) => {
  rentController.insertOne(req.body).then((rent) => {
    res.json(rent);
  });
});

//READ ALL
router.get("/", (req, res) => {
  rentController.findAll().then((rents) => {
    res.json(rents);
  });
});

//READ ONE
router.get("/:id", (req, res) => {
  const id = req.params.id;
  rentController.findOne(id).then((rent) => {
    res.json(rent);
  });
});

//UPDATE ONE
router.put("/:id", (req, res) => {
  const id = req.params.id;
  rentController.updateOne(id, req.body).then((rent) => {
    res.json(rent);
  });
});

// DELETE ONE
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  rentController.deleteOne(id).then(() => {
    res.json({ message: "Rent deleted!" });
  });
});

module.exports = router
