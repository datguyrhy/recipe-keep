let React = require('react');
const Navbar = require("./Nav/navbar.jsx");
class DeleteRecipe extends React.Component {
  render() {
    let recipe = this.props.recipe;
    let recipeid = parseInt(recipe[0].id);
        let deleteUrl = "/recipes/"+recipeid+"/deleted"
    return(
      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
          </head>
         <body>
            <Navbar/>
           <div className="container">
           <h1 className="display-2">You are deleting {this.props.title}</h1>
             <h2>Are you sure?</h2>
           <form method="POST" action={deleteUrl}>
           <div className=" text-center well d-flex justify-content-around justify-content-center mt-5 " style={{width: "300px", margin:"0 auto"}}>
           <button class="btn btn-danger btn-lg" type="submit" value="Confirm">Confirm</button>
          <button class="btn btn-info btn-lg" ><a className="text-white" href="/home">Back To Home</a></button>
             </div>

           </form>
           </div>

         </body>
      </html>
    );
  }
}

module.exports = DeleteRecipe;
