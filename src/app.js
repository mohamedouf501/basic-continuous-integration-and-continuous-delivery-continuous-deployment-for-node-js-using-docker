const express = require("express");
const app = express();
let count = 0;
app.get("/", (req, res) => {
  console.log("request received", ++count);
  res.json({
    message: "Hello World!",
    "request received": ++count,
  });
});

module.exports = app;
