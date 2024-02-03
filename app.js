const express = require("express");
const app = express();
const gameOfThrones = require("./got");

// Configure static files
app.use(express.static("public"));

// Configure hbs view engine
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Routes
app.get("/", (req, res) => {
  gameOfThrones.getEpisodes().then((episodes) => {
    res.render("episodes", { data: episodes });
  });
});

app.get("/random", (req, res) => {
  gameOfThrones.getRandomEpisode().then((episode) => {
    res.render("episode", { data: episode });
  });
});

app.listen(3000, () => {
  console.log("Ready on port 3000!");
});
