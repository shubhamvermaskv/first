const express = require("express");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
  // res.send("1");
});

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`server is listening at ${PORT}`);
});
