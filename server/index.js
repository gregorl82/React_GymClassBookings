const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.get("/api/test", (req, res) => {
  res.send({ message: "Hello world" });
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
