const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const membersRouter = require("./routers/membersRouter");

app.use(bodyParser.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.status(200).json({ message: "Hello, World" });
});

app.use("/api/members", membersRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
