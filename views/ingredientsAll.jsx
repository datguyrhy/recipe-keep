const React = require('react');
const Navbar = require("./Nav/navbar.jsx");

class IngredientsAll extends React.Component {
  render(){
    const ingredientlist = this.props.ingredients.map(ingredient  => {
      let url = "/ingredients/"+ingredient.id;
     return (
       <div className="col-4 d-inline-flex justify-content-between">
      <h4><a href={url}>{ingredient.id}. {ingredient.ingredient_name}</a></h4>
      </div>
     )
    });
    return(
      <html>
        <head>
          <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
              integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
              crossOrigin="anonymous"
            ></link>
          </head>
        <body>
          <Navbar/>
          <h1>Recipes</h1>
          <br/>
          {ingredientlist}
          <br/>
          <br/>
            <button class="btn btn-outline-info my-2 my-sm-0 text-left"><a href="/recipes/all" class="text-decoration-none" >Recipedia</a></button>
            &ensp;&ensp;&ensp;&ensp;&ensp;
            <button class="btn btn-outline-info my-2 my-sm-0 text-left"><a href="/recipes/new" class="text-decoration-none" >New Recipe</a></button>
            &ensp;&ensp;&ensp;&ensp;&ensp;
            <button class="btn btn-outline-info my-2 my-sm-0 text-left"><a href="/ingredients/all" class="text-decoration-none" >Ingredients list</a></button>
        </body>
      </html>
    )
  }
}

module.exports = IngredientsAll;
