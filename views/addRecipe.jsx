const React = require('react');

class Addrecipe extends React.Component {
  render() {
    return (<html>
      <body>
        <div>
          <h1>Adding New Recipe</h1>
          <p>Choose the following:
          </p>
          <form method="POST" action="/recipe/new">
            Title:
            <input type="text" name="Title"/><br/>

            <input type="checkbox" name="ingredients"/><br/>
            <p>instructions:</p>
            <textarea name="instructions">
            </textarea>
            <br/>

            <input type="submit"/>
          </form>
        </div>
      </body>
    </html>);
  }
}

module.exports = Addrecipe;
