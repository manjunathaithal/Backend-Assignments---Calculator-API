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
app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.post("/add", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;

  if (!isNaN(num1) && !isNaN(num2)) {
    let result = num1 + num2;
    res.send({
      status: "success",
      message: "the sum of given two numbers",
      sum: result,
    });
  } else {
    res.send({
      status: "failure",
      message: "Invalid data types",
    });
  }
});
app.post("/sub", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (!isNaN(num1) && !isNaN(num2)) {
    let result = num1 - num2;
    res.send({
      status: "success",
      message: "the difference of given two numbers",
      difference: result,
    });
  } else {
    res.send({ status: "failure", message: "Invalid data types" });
  }
});
app.post("/multiply", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (!isNaN(num1) && !isNaN(num2)) {
    let result = num1 * num2;
    res.send({
      status: "success",
      message: "The product of given numbers",
      result: result,
    });
  } else {
    res.send({
      status: "failure",
      message: "Invalid data types",
    });
  }
});

app.post("/divide", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (!isNaN(num1) && !isNaN(num2)) {
    if (num2 != 0) {
      let result = req.body.num1 / req.body.num2;
      res.send({
        status: "success",
        message: "The division of given numbers",
        result: result,
      });
    } else {
      res.send({
        status: "failure",
        message: "Cannot divide by zero",
      });
    }
  } else {
    res.send({
      status: "failure",
      message: "Invalid data types",
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
