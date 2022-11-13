const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", function (req, res) {
  res.send("Hello");
});

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/", function (req, res) {
  const body = req.body;
  console.log(body);
  res.send(req.body);
});
