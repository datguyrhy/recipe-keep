const React = require('react');
const Navbar = require("./Nav/navbar.jsx");
class AddIngredient extends React.Component {
  render(){


    return (<html>
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
        <div className="container-fluid">
          <h2>Adding New Ingredient</h2>
          <form method="POST" action="/ingredients/new">
            Ingredient:&ensp;
            <input type="text" name="ingredient" value="" required/><br/>
            <br/>
            <input type="submit"/>
          </form>

        </div>
      </body>
    </html>);
  }
}

module.exports = AddIngredient;
