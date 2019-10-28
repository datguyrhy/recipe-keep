//jshint esversion:6
const sha256 = require('js-sha256');
const salt = 'wow';

module.exports = (dbPoolInstance) => {
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////INGREDIENTS MODELS///////////////////////
////////////////////////////////////////////////////////////////////////////
  //return database of ingredients
  let ingredientsCall = (callback)=>{
    let query = "SELECT * FROM ingredients";
    dbPoolInstance.query(query, (err, queryResult) => {
      if( err ){

        // invoke callback function with results after query has executed
        callback(err, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };
  let addIngredient = (request,callback)=>{
    console.log(request);
    let input = [request]
    let query = 'INSERT INTO ingredients (ingredient_name) VALUES ($1) RETURNING *';
    dbPoolInstance.query(query, input, (err, queryResult) => {
      if( err ){

        // invoke callback function with results after query has executed
        callback(err, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };
////////////////////////////////////////////////////////////////////////////
///////////////////////RECIPES//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

let addIngToRecipe = (request,callback)=>{
  request.forEach((req)=>{
    let afk = `SELECT id FROM recipes ORDER BY id DESC LIMIT 1;`
    let chicken = dbPoolInstance.query(afk,(err,queryResult)=>{
    if ( queryResult.rows.length > 0 ){
      console.log(queryResult.rows[0].id);
      parseInt(req);
      let input = [queryResult.rows[0].id,req]
      console.log(input);
      let query = 'INSERT INTO ingredToRecipe (recipe_id,ingredient_id) VALUES ($1,$2) RETURNING *';
        dbPoolInstance.query(query, input, (err, queryResult) => {
          if( err ){

            // invoke callback function with results after query has executed
            callback(err, null);

          }else{

            // invoke callback function with results after query has executed

            if( queryResult.rows.length > 0 ){
              callback(null, queryResult.rows);

            }else{
              callback(null, null);

            }
          }
        });
    }
    })


  })


};

// let addRecipeId = (request,callback)=>{
//   let recipeQ = "SELECT id FROM recipes ORDER BY ID DESC LIMIT 1;"
//   dbPoolInstance.query(recipeQ, (err,queryResult)=>{  if( err ){
//
//       // invoke callback function with results after query has executed
//       callback(err, null);
//
//     }else{
//
//       // invoke callback function with results after query has executed
//
//       if( queryResult.rows.length > 0 ){
//         callback(null, queryResult.rows);
//
//       }else{
//         callback(null, null);
//         let recipenum=[queryResult];
//         console.log(recipenum);
//         let insertRecipeId = "INSERT INTO ingredToRecipe (recipe_id) VALUES ($1)RETURNING*"
//         dbPoolInstance.query(recipenum,(err,insertRecipeId)=>{  if( err ){
//
//             // invoke callback function with results after query has executed
//             callback(err, null);
//
//           }else{
//
//             // invoke callback function with results after query has executed
//
//             if( queryResult.rows.length > 0 ){
//               callback(null, queryResult.rows);
//
//             }else{
//               callback(null, null);
//
//             }
//           }
//         });
//       }
//     }
//     });
//   }


  let addRecipe = (request,callback)=>{
    // console.log(request.body);
    let input = [request.body.title, request.body.ingredients, request.body.instructions]
    let query = 'INSERT INTO recipes (title,ingredients,instructions) VALUES ($1,$2,$3) RETURNING *';
    dbPoolInstance.query(query, input, (err, queryResult) => {
      if( err ){

        // invoke callback function with results after query has executed
        callback(err, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

  let recipesShowAll = (callback) => {
    const queryString = 'SELECT * FROM recipes';

    dbPoolInstance.query(queryString, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

  let recipeDelete = (value, callback) => {
    const queryArray = [parseInt(values)];
    const queryString = 'DELETE FROM recipes WHERE id = $1 RETURNING *';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };


  let recipeShow = (value, callback) => {
    const queryArray = [parseInt(value)];
    // const queryString = 'SELECT id,title,ingredients,instructions FROM recipes WHERE id =$1';
    const queryString = `SELECT recipes.title,recipes.instructions,ingredients.ingredient_name FROM recipes INNER JOIN ingredtorecipe ON (recipes.id = ingredtorecipe.recipe_id) INNER JOIN ingredients ON (ingredients.id = ingredtorecipe.ingredient_id) WHERE recipes.id = $1`
    // console.log(queryString);
    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
          // console.log(queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

  return {
    ingredientsCall,
    addIngredient,
    addIngToRecipe,
    // addRecipeId,
    addRecipe,
    recipeShow,
    recipesShowAll,
    recipeDelete
  };
  };
