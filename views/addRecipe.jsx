const React = require('react');

class Addrecipe extends React.Component {
  render() {
    let ingredientsObj = this.props.result
    let newArray = ingredientsObj.map((ing)=>{
        return(
          // console.log(ing)
          <div class="col-2 d-inline-flex align-items-center justify-content-start flex-wrap">
          <input name="ingredients" type ="checkbox" value={ing.ingredient_name}/>{ing.ingredient_name}
            </div>
        )
    })




      // let render = (req,res)=>{
      //   let x = document.createElement('button');
      //   x.style.value =tempArr;
      //   document.body.appendChild(x);
      // }

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
          <h1>Adding New Recipe</h1>
          <p>Choose the following:
          </p>
          <form method="POST" action="/recipes/add">
            Dish Name:&ensp;
            <input type="text" name="title"/><br/>
            <br/><br/>
            {newArray}
            <p>instructions:</p>
            <textarea name="instructions" required>
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
