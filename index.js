const express = require("express");
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 3004;

const indexRouter = require("./routes/index");
const carsRouter = require("./routes/cars");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");

app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.json({ string: "hello world" });
});

app.use("/", indexRouter);
app.use('/cars', carsRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.listen(port, () => {});

module.exports = app;
