const express = require("express"),
    router = express.Router();

router.get("/", (req, res) => {
    res.json({ string: "hello world" });
});

module.exports = router;
