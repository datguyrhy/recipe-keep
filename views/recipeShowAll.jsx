const React = require('react');
const Navbar = require("./Nav/navbar.jsx");

class RecipeShowAll extends React.Component {
  render(){
    const recipelist = this.props.recipelist.map(recipe  => {
     return (
       <div className="col-12 d-inline-flex justify-content-between">
      <h3><a href='/recipes/:id'>{recipe.title}</a></h3>
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
          {recipelist}
        </body>
      </html>
    )
  }
}

module.exports = RecipeShowAll;
