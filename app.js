const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

let list = [];

app.get("/hello", (req, res) => {
  res.send({ msg: "Hello world!" });
});

app.get("/echo/:id", (req, res) => {
  res.send({ id: req.params.id });
});

app.post("/list", (req, res) => {
  list.push(req.body.text);
  res.send({ list: list });
});

app.post("/sum", (req, res) => {
  sum = 0;
  req.body.numbers.forEach((number) => {
    sum += number;
  });
  res.send({ sum: sum });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
