module.exports = db => {
/////////////////////////////////////////////////////
let ingredientsCallback = (req,res)=>{

  db.ingredients.ingredientsCall((err,result)=>{
    data = {
      result: result
    }
      console.log(data);
      let getIngredientName = (result)=>{
      return result.ingredient_name;
    }
    var tempArr = data.result.map(getIngredientName);
    // let render = (req,res)=>{
    //   let x = document.createElement('button');
    //   x.style.value =tempArr;
    //   document.body.appendChild(x);
    // }
    res.send(tempArr)
    // console.log(tempArr);
});

};
////////////////////////////////////////////////////////////
/// listens for request and respond with form
  let recipeFormRenderCall = (req, res) => {
    db.ingredients.ingredientsCall((err,result)=>{
      let data = result;

      console.log(data);
      // let data = {queryResult};
      // res.send(data);
      //   console.log(data.result);
      //   let getIngredientName = (result)=>{
      //   return result.ingredient_name;
      // }
      // var tempArr = data.result.map(getIngredientName);

        res.render("addRecipe",data);
  })
  };
////////////////////////////////////////////////

////////////////////////////////////////////////




/// name your functions
  return{
    recipeFormRenderCall:recipeFormRenderCall,
    ingredientsCallback:ingredientsCallback
  };
};
