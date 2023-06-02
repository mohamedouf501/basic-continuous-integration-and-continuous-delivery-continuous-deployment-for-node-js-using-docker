const express = require("express");
const app = express();
let count = 0;
app.get("/", (req, res) => {
res.json({ "Hello World!": count++ , hostname: req.hostname  });
});

module.exports = app;
