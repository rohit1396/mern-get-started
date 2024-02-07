require("dotenv").config();
const express = require("express");

const app = express();
const Port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/youtube", (req, res) => {
  res.send("welcome to youtube");
});

app.get("/instagram", (req, res) => {
  res.send("welcome to instagram");
});

app.get("/facebook", (req, res) => {
  res.send("welcome to facebook");
});

app.listen(Port, () => console.log(`Server runing on port : ${Port}`));
