const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { json } = require("express");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get("/home", (req, res) => {
  res.send("Hello world!");
});
app.post("/add", (req, res) => {
  let result = req.body.num1 + req.body.num2;
  res.send({
    status: "success",
    message: "the sum of given two numbers",
    sum: result,
  });
});
app.post("/sub", (req, res) => {
  let result = req.body.num1 - req.body.num2;
  res.send({
    status: "success",
    message: "the difference of given two numbers",
    difference: result,
  });
});
app.post("/multiply", (req, res) => {
  let result = req.body.num1 * req.body.num2;
  res.send({
    status: "success",
    message: "The product of given numbers",
    result: result,
  });
});

app.post("/divide", (req, res) => {
  let result = req.body.num1 / req.body.num2;
  res.send({
    status: "success",
    message: "The division of given numbers",
    result: result,
  });
});
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
