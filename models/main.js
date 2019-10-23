module.exports = (dbPoolInstance) => {




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
  let recipesShowAll = (value, callback) => {
    const queryArray = [value];
    const queryString = 'SELECT * FROM recipes WHERE id = $1';

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

  let recipesDelete = (value, callback) => {
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
  return {
    ingredientsCall,
    recipesShowAll,
    recipesDelete
  };
  };
