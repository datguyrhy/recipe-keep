module.exports = db => {
/// call table

/// listens for request and respond with form
  let recipeFormRenderCall = (req, res) => {
    res.render("recipe/form");
  };

let ingredientsCallback = (req,res)=>{

  db.ingredients.ingredientsCall((err,queryResult)=>{
    let data = {queryResult}[0].ingredient_name;
    console.log(data);
    res.send(data)
})


};
  // res.send('/ingredients', {result});



/// name your functions
  return{
    ingredientsCallback:ingredientsCallback
  };
};
