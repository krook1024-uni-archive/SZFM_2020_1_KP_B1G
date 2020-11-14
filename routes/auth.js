const express = require("express"),
    router = express.Router();

const passport = require("passport");
const model = require("../models/User");
const { BasicStrategy } = require("passport-http");

passport.use(
    new BasicStrategy((email, password, done) => {
        console.log(email, password, done);
        model.findOne({ email, password }, (err, user) => {
            if (err) {
                console.log(err);
                return done(err);
            }

            console.log(user);

            if (!user) {
                return done(null, false);
            }

            return done(null, user);
        });
    })
);

router.post("/login", passport.authenticate("basic"), (req, res) => {
    // successful auth
    // req.user contains the authenticated user
    console.log(req.user);
    res.json({ status: 1 });
});

module.exports = router;
