const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{
  configs = {
    user: 'datguyrhy',
    host: '127.0.0.1',
    database: 'recipedb',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});



/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

/// this controls callback for POOL queries AKA database//////
const allModelsFunction = require('./models/main');
const somethingModelsObject = allModelsFunction( pool );

// const registerUser = require('./models/register');
// const userRegistration = registerUser( pool );

// const loginUser = require('./models/login');
// const userLogin = loginUser( pool );
//
// const allsomethingModelsFunction = require('./models/path');
// const allsomethingModelsObject = allsomethingModelsFunction( pool );


/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */


module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool:pool,

  /*
   * ADD APP MODELS HERE
   */
ingredients:somethingModelsObject
  // users: userModelsObject,
  // pokemon: pokemonModelsObject,
  // userRegistration: userRegistration,
  // userLogin: userLogin,
  // tweets: allTweetsModelsObject,
};
