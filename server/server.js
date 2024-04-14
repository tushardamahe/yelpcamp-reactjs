const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Server TD");
});

app.get("/register", (req, res) => {
  res.status(200).send("Welcome to Registration Page TD");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
