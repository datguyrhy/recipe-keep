const sha256 = require('js-sha256');
const salt = 'wow';

module.exports = (dbPoolInstance) => {
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////INGREDIENTS MODELS///////////////////////
////////////////////////////////////////////////////////////////////////////
  //return database of ingredients
  let ingredientsCall = (callback)=>{
    let query = "SELECT ingredient_name FROM ingredients";
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
  return {
    ingredientsCall,
    addIngredient,
    addRecipe,
    recipesShowAll,
    recipeDelete
  };
  };
