const sha256 = require('js-sha256');
const salt = 'wow';


module.exports = db => {



  let homePage =(req,res)=>{
    res.render('home')
  };


    /////////////////////////////////////////////////////
    let ingredientsCallback = (req, res) => {

        db.ingredients.ingredientsCall((err, result) => {
            data = {
                ingredients: result
            }
            console.log(data);
            res.render('ingredientsAll',data)
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

          res.redirect('/ingredients/all');
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

    // let addIngToRecipe = (ingredient,response)=>{
    //
    //   let ingredientResult = request.body.ingredients
    //   db.ingredients.addIngToRecipe(ingredientResult,(err)=>{
    //     if (err) {
    //       console.log("Error!", err);
    //     } else {
    //     console.log("added ingredients to RL table");
    //     console.log(ingredientResult);
    //   }
    // });
    // }


    let addRecipe = (request, response) => {


      // request.body.ingredients = request.body.ingredients.join(",");
      db.ingredients.addRecipe(request, (err) => {

        if (err) {
          console.log("Error!", err);
        } else {

          // const data = {
          //   request
          // };
          let user_name = request.cookies.user_name;
          console.log(request.body);
          console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiii");
            let x = request.body.ingredients
            db.ingredients.addIngToRecipe(x,(err)=>{
            if (err) {
              console.log("Error!", err);
            } else {
            console.log("added ingredients to RL table");
            console.log(x);
          }
        });

          response.redirect('/recipes/all');
        }

      });

    };


    let recipeAllShow = (req,res)=>{
      db.ingredients.recipesShowAll((err,result)=>{
        let list = {
          recipelist: result
        }
      // console.log(list.recipelist);
      res.render("RecipeShowAll",list)
      });
    };


      let recipeShow = (req,res)=>{
        console.log("heyyyyyyyyyyyyyyyyyy");
        // console.log(req.params.id);
      db.ingredients.recipeShow(req.params.id,(err,result)=>{
        if(err){

          console.log(err);

        }else{
          // console.log(result);
          let list = {
            recipe: result
          }
          res.render("recipeShow",list)
        }

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
        addIngToRecipe:addRecipe,
        homePage:homePage,
        recipeShow:recipeShow,
        recipeAllShow: recipeAllShow,
        recipeFormRenderCall: recipeFormRenderCall,
        addRecipe:addRecipe,
        recipeDelete:recipeDelete,
        newIngredientForm:newIngredientForm,
        addNewIngredient:addNewIngredient,
        ingredientsCallback: ingredientsCallback

    };
};
