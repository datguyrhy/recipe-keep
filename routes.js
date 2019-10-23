module.exports = (app, allModels) => {

  // declaring the require function for the routes
  const ingredientsControllerCallbacks = require('./controllers/recipe.js')(allModels);
  // const userLoginControllerCallbacks = require('./controllers/login')(allModels);
  // const tweetsControllerCallbacks = require('./controllers/tweets')(allModels);


app.get('/ingredients',ingredientsControllerCallbacks.ingredientsCallback)
  //
  // // renders reg form
  // app.get('/register', userRegistrationControllerCallbacks.renderRegistrationForm);
  // app.post('/register', userRegistrationControllerCallbacks.registerUser);
  //
  //
  // //login render LoginForm
  // app.get('/login', userLoginControllerCallbacks.renderLoginForm);
  // app.post('/login', userLoginControllerCallbacks.loginUser);
  //
  // //renders landing page????
  // app.get('/', tweetsControllerCallbacks.showAllTweets);
  // app.get('/recipe/new', somethingControllerCallbacks.renderNewsomethingForm);
  // app.post('/tweets', tweetsControllerCallbacks.addNewTweet);

  //app.get('/pokemons/:id', pokemons.getPokemon);
};
