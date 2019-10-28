module.exports = (app, allModels) => {

  // declaring the require function for the routes
  const ingredientsControllerCallbacks = require('./controllers/recipe.js')(allModels);
  const userControllerCallbacks = require('./controllers/user')(allModels);

app.get('/',userControllerCallbacks.landingRender);
app.get('/home',ingredientsControllerCallbacks.homePage);
app.get('/recipes/all',ingredientsControllerCallbacks.recipeAllShow);
app.get('/recipes/new',ingredientsControllerCallbacks.recipeFormRenderCall);
app.post('/recipes/add',ingredientsControllerCallbacks.addRecipe,ingredientsControllerCallbacks.addIngToRecipe);
app.get('/recipes/:id',ingredientsControllerCallbacks.recipeShow);
app.get('/recipes/:id/delete', ingredientsControllerCallbacks.recipeDelete);
app.get('/ingredients/all',ingredientsControllerCallbacks.ingredientsCallback);
app.get('/ingredients/add', ingredientsControllerCallbacks.newIngredientForm);
app.post('/ingredients/new',ingredientsControllerCallbacks.addNewIngredient);
  // // renders reg form
app.get('/register', userControllerCallbacks.newUser);

app.post('/register', userControllerCallbacks.userCreate);

app.get('/login', userControllerCallbacks.userLogin);

app.post('/login', userControllerCallbacks.userLoggedIn);
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
