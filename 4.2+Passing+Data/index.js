import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
var nam = "";
function fetchname(req, res, next) {
  nam = req.body["fName"] + " " + req.body["lName"];
  next();
}
app.use(fetchname);
app.post("/submit", (req, res) => {
  res.render("index.ejs", { nm: nam });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
