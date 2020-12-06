const express = require("express"),
  router = express.Router(),
  passport = require("passport");

const rentModel = require("../models/Rent");
const paginate = require("../middlewares/paginate");

const rentController = require("../controllers/rentController")();

passport.use("admin", require("../controllers/authStrategy.js"));
passport.use("admin", require("../controllers/authAdminStrategy.js"));

// CREATE ONE
router.post(
  "/",
  passport.authenticate("basic", { session: false }),
  (req, res) => {
    rentController.insertOne(req.body).then((rent) => {
      res.json(rent);
    });
  }
);

//READ ALL
router.get(
  "/",
  passport.authenticate("admin", { session: false }),
  paginate(rentModel),
  (req, res) => {
    rentController.findAll(req.sorting).then((rents) => {
      res.json(rents);
    });
  }
);

//READ ONE
router.get(
  "/:id",
  passport.authenticate("admin", { session: false }),
  (req, res) => {
    const id = req.params.id;
    rentController.findOne(id).then((rent) => {
      res.json(rent);
    });
  }
);

// READ ALL WITH USERID
router.get(
  "/uid/:userid",
  passport.authenticate("admin", { session: false }),
  (req, res) => {
    const userId = req.params.userid;
    rentController.findByUserId(userId).then((rent) => {
      res.json(rent);
    });
  }
);

//UPDATE ONE
router.put(
  "/:id",
  passport.authenticate("admin", { session: false }),
  (req, res) => {
    const id = req.params.id;
    rentController.updateOne(id, req.body).then((rent) => {
      res.json(rent);
    });
  }
);

// DELETE ONE
router.delete(
  "/:id",
  passport.authenticate("admin", { session: false }),
  (req, res) => {
    const id = req.params.id;
    rentController.deleteOne(id).then(() => {
      res.json({ message: "Rent deleted!" });
    });
  }
);

// USER DELETE ONE
// olyan route, ahova szimpla user is kuldhet requestet, viszont csak a sajatjat
// tudja torolni, es csak akkor, ha 3 nap vagy tobb mulva kezdodne a berles

module.exports = router;
