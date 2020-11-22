const authController = require("../controllers/authController")();
const express = require("express"),
    router = express.Router();

const passport = require("passport");

passport.use(require("../controllers/authStrategy.js"));
passport.use("admin", require("../controllers/authAdminStrategy.js"));

router.post(
    "/login",
    passport.authenticate("basic", { session: false }),
    (req, res) => {
        // successful auth
        // req.user contains the authenticated user
        res.json(req.user);
    }
);

router.post(
    "/login/admin",
    passport.authenticate("admin", { session: false }),
    (req, res) => {
        // successful auth
        // req.user contains the authenticated user
        res.json(req.user);
    }
);

router.post("/register", async (req, res) => {
    res.json(await authController.register(req.body));
});

module.exports = router;
