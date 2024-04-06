require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.get("/twitter", (req, res) => {
  res.json({ title: "Hello World" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
