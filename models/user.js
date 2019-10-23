const sha256 = require('js-sha256');
const salt = 'wow';

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let userCreate = (value, callback) => {
    const queryArray = [value.username, sha256(value.password+salt)];
    const queryString = 'INSERT INTO users (user_name, password) VALUES ($1, $2) RETURNING *';

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

  let userLogin = (value, callback) => {
    const queryArray = [value.username];
    const queryString = 'SELECT * FROM users WHERE user_name = $1';
    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult);
        }else{
          callback(null, null);
        }
      }
    });
  };


  return {
    userCreate,
    userLogin
  };
};
