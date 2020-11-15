const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const rentController = require("./controllers/rentController");

require("dotenv").config();

const port = process.env.PORT || 3004;

const mongo_config = {
    auth: { authSource: "admin" },
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose
    .connect(process.env.MONGO_URI, mongo_config)
    .then(() => {
        console.log("MongoDB connected");

        app.use(cors());
        app.use(morgan("tiny"));
        app.use(cookieParser());
        app.use(bodyParser.json());
        app.use(passport.initialize());

        // API ROUTES
        const carsRouter = require("./routes/cars");
        const usersRouter = require("./routes/users");
        const authRouter = require("./routes/auth");
        const rentsRouter = require("./routes/rents");
        app.use("/cars", carsRouter);
        app.use("/users", usersRouter);
        app.use("/auth", authRouter);
        app.use("/rents", rentsRouter)

        // STATIC ROUTES FOR REACT
        app.use(express.static(path.join(__dirname, "client/build")));

        app.get("/*", (req, res) => {
            res.sendFile(path.join(__dirname, "client/build", "index.html"));
        });

        app.listen(port, () => {
            console.log(`Listening on port: ${port}`);
        });
    })
    .catch((err) => console.log(err));

module.exports = app;
