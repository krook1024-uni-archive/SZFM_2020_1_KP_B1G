const BasicStrategy = require("passport-http").BasicStrategy,
    User = require("../models/User");

module.exports = new BasicStrategy((email, password, done) => {
    User.findOne(
        { email: email, password: password, isAdmin: true },
        (err, user) => {
            if (err) {
                console.log(err);
                return done(err);
            }

            if (!user) {
                return done(null, false);
            }

            return done(null, user);
        }
    );
});
