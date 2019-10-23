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

  return {
    ingredientsCall
  };
  };
