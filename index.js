
"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.sendFile("index.html");
});

app.listen(process.env.PORT || 3000, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("App listening on port");
});

const users = [];

app.post("/users", (req, res, next) => {
  const user = req.body;
  user.birthday = new Date(user.birthday);
  user.id = Date.now();
  users.push(user);
  res.json(user);
});
