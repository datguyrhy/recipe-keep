const React = require('react');
const Navbar = require("./Nav/navbar.jsx");

class RecipeShow extends React.Component {
  render() {
    let recipe = this.props.recipe;
    let recipeid = parseInt(recipe[0].id);
    console.log(recipeid);
    // console.log(this.props);
    let ingredientsArray = recipe.map((ing) => {
      console.log(ing)
      return (

      <div className="col-1 align-items-center justify-content-start flex-wrap">
        <h5>{ing.ingredient_name}</h5>
        <br/>
      </div>)
    })
    return (<html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
      </head>
      <body>
        <Navbar/>
        <div className="container-fluid">
          <h2>{recipe[0].title}</h2>
          <h3>Ingredients</h3>
          <h4>{ingredientsArray}</h4>
          <h3>Instructions</h3>
          <h4>{recipe[0].instructions}</h4>
        </div>
        <button class="btn btn-outline-info my-2 my-sm-0 text-left"><a href="/recipes/all" class="text-decoration-none" >Recipedia</a></button>
        &ensp;&ensp;&ensp;&ensp;&ensp;
        <button class="btn btn-outline-info my-2 my-sm-0 text-left"><a href="/recipes/new" class="text-decoration-none" >New Recipe</a></button>
        &ensp;&ensp;&ensp;&ensp;&ensp;
        <button class="btn btn-outline-info my-2 my-sm-0 text-left"><a href="/ingredients/all" class="text-decoration-none" >Ingredients list</a></button>
        &ensp;&ensp;&ensp;&ensp;&ensp;
        <button class="btn btn-outline-info my-2 my-sm-0 text-left"><a href='/recipes/delete' class="text-decoration-none" > Delete Recipe </a></button>

      </body>
    </html>);
  }
}

module.exports = RecipeShow;
