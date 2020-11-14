const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 3004;

console.log(`mongo_uri: ${process.env.MONGO_URI}`);

const mongo_config = {
    auth: { authSource: "admin" },
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose
    .connect(process.env.MONGO_URI, mongo_config)
    .then(() => {
        console.log("MongoDB connected");

        const indexRouter = require("./routes/index");
        const carsRouter = require("./routes/cars");
        const usersRouter = require("./routes/users");
        const authRouter = require("./routes/auth");

        app.use(morgan("tiny"));

        app.get("/", (req, res) => {
            res.json({ string: "hello world" });
        });

        app.use("/", indexRouter);
        app.use("/cars", carsRouter);
        app.use("/users", usersRouter);
        app.use("/auth", authRouter);

        app.listen(port, () => {
            console.log(`Listening on port: ${port}`);
        });
    })
    .catch((err) => console.log(err));

module.exports = app;
