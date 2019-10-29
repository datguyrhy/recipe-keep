const React = require('react');
const Navbar = require("./Nav/navbar.jsx");

class Addrecipe extends React.Component {
  render() {
    let ingredientsObj = this.props.result
    let ingredientsArray = ingredientsObj.map((ing) => {
      // console.log(ing)
      return (

      <div className="col-4 d-inline-flex align-items-center justify-content-start flex-wrap">
        <h5><input name="ingredients" type="checkbox" value={ing.id}/>{ing.ingredient_name}</h5>
      </div>)
    })

    return (<html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
      </head>
      <body>
        <Navbar/>
        <div className="container-fluid">
          <h2>Adding New Recipe</h2>
          <br/>
          <div className="form-group">
            <form method="POST" action="/recipes/add">
              Dish Name:&ensp;
              <input type="text" className=".form-control" name="title" required/><br/>
              <br/>
              {ingredientsArray}
              <br/>
              <div className="row">
                <div className="col">
                  <br/>
                  <p>Instructions:</p>
                  <textarea className=".form-control" name="instructions" rows="10" cols="60" required ></textarea>
                  <br/>
                      <button class="btn btn-outline-info my-2 my-sm-0 text-left" type="submit" >Add recipe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>
    </html>);
  }
}

module.exports = Addrecipe;
