const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const chef = require("./Data/chef.json");
const recipe = require("./Data/recipe.json");
const recipeSingle = require("./Data/recipe.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Chef is running");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});
app.get("/recipe", (req, res) => {
  res.send(recipe);
});
app.get("/recipeSingle", (req, res) => {
  res.send(recipeSingle);
});
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chef.find((n) => n.id === id);
  res.send(selectedChef);
});

app.get("/recipe/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id);
  if (id == 0) {
    res.send(recipe);
  } else {
    const recipeList = recipe.filter((n) => parseInt(n.id) === id);
    res.send(recipeList);
  }
});
app.get("/recipeSingle/:id", (req, res) => {
  const id = req.params.id;
  const recipeDetails = recipeSingle.find((n) => n.r_Id === id);
  res.send(recipeDetails);
});


app.listen(port, () => {
  console.log(`Chef API is running on port: ${port}`);
});
