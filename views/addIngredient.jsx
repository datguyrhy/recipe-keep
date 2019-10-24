const React = require('react');

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
        <div>
          <h1>Adding New Ingredient</h1>
          <form method="POST" action="/ingredients/new">
            Ingredient:&ensp;
            <input type="text" name="ingredient" value="" required/><br/>
            <br/>
            <br/>
            <input type="submit"/>
          </form>

        </div>
      </body>
    </html>);
  }
}

module.exports = AddIngredient;
