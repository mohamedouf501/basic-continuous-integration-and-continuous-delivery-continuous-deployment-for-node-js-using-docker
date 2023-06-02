const express = require("express");
const app = express();
let count = 0;
app.get("/", (req, res) => {
console.log(req.hostname);
res.json({ "Hello World!": count++ });
});

module.exports = app;
