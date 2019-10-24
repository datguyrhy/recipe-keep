const React = require('react');
const Navbar = require("./Nav/navbar.jsx");

class Addrecipe extends React.Component {
  render() {
    let ingredientsObj = this.props.result
    let newArray = ingredientsObj.map((ing) => {
      return (
      // console.log(ing)
      <div className="col-4 d-inline-flex align-items-center justify-content-start flex-wrap">
        <input name="ingredients" type="checkbox" value={ing.ingredient_name}/>{ing.ingredient_name}
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
              <input type="text" className=".form-control" name="title"/><br/>
              <br/>
              {newArray}

              <div className="row">
                <div className="col">
                  <br/>
                  <p>Instructions:</p>
                  <textarea className=".form-control" name="instructions" rows="10" cols="60" required="required"></textarea>
                  <br/>
                  <input type="submit"/>
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
