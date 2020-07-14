const express = require("express");
const app = express();
const port = process.env.port || 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.set("port", process.env.PORT || 5000);
app.get("/", (req, res) => {
  res.render("index.ejs");
  // res.send("1");
});

//get a new port
app.listen(app.get("port"), (err) => {
  if (err) {
    throw err;
  }
  console.log(`server is listening at ${port}`);
});
