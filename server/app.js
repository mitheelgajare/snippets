const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();
const port = 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const getAllSnippets = require("./routes/getAllSnippets");
app.use("/", getAllSnippets);

const getSpecificSnippet = require("./routes/getSpecificSnippet");
app.use("/", getSpecificSnippet);

app.listen(port, () => {
  console.log("Server has started");
});
