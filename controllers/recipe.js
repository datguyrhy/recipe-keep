module.exports = db => {
    /////////////////////////////////////////////////////
    let ingredientsCallback = (req, res) => {

        db.ingredients.ingredientsCall((err, result) => {
            data = {
                result: result
            }
            console.log(data);
            res.render(data)
        });

    };
    ////////////////////////////////////////////////////////////
    let newIngredientForm =(req,res)=>{
      res.render('addIngredient')
    };


    let addNewIngredient = (req, res) => {
      let user_name = req.cookies.user_name;
      let request = req.body.ingredient;

      db.ingredients.addIngredient(request, (err) => {
        if (err) {
          console.log("Error!", err);
        } else {
          const data = {
            message: "Ingredient Added",
          };

          res.send(data.message);
        }
      });
    };
    ////////////////////////////////////////////////////////////
    /// listens for request and respond with form
    let recipeFormRenderCall = (req, res) => {
        db.ingredients.ingredientsCall((err, result) => {
            let data = {
              result:result
            }
            // console.log(data);
            res.render("addRecipe", data);
        });

    };

    let addRecipe = (request, response) => {
      let user_name = request.cookies.user_name;
      console.log(request.body);
      request.body.ingredients = request.body.ingredients.join(",");
      console.log(request.body);
      db.ingredients.addRecipe(request, (err) => {
        if (err) {
          console.log("Error!", err);
        } else {

          // const data = {
          //   request
          // };

          response.send('yay added recipe');
        }
        // response.render('tweets/addNewSuccess', { newTweet });
      });
    };
    ////////////////////////////////////////////////
    ////////////////////DELETE RECIPE///////////////
    ////////////////////////////////////////////////
    let recipeDelete = (req, res) => {
    // if (req.cookies.hasLoggedIn === sha256(req.cookies.user_id+salt)){
      db.ingredients.recipeDelete(req.params.id, (err, result) => {
        res.render('deleteRecipe');
      });

  };


    /// name your functions
    return {
        recipeFormRenderCall: recipeFormRenderCall,
        addRecipe:addRecipe,
        recipeDelete:recipeDelete,
        newIngredientForm:newIngredientForm,
        addNewIngredient:addNewIngredient,
        ingredientsCallback: ingredientsCallback

    };
};
