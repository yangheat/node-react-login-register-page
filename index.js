const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
const uri =
  "mongodb+srv://SunPark:1234@cluster0.ixwrf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
