var React = require("react");
const Navbar = require("./Nav/navbar.jsx");
class Home extends React.Component {
  render() {
    return (
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
          <div className="container-fluid">
            <div className="row">
              <div class="card bg-dark text-white">
                <img src="https://i.imgur.com/a2gSdFb.jpg" class="card-img" alt="..."/>
                <div className="card-img-overlay">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
            <br/>
            <br/>
            <button class="btn btn-outline-info my-2 my-sm-0 text-left"><a href="/recipes/all" class="text-decoration-none" >Recipedia</a></button>
            &ensp;&ensp;&ensp;&ensp;&ensp;
            <button class="btn btn-outline-info my-2 my-sm-0 text-left"><a href="/recipes/new" class="text-decoration-none" >New Recipe</a></button>
            &ensp;&ensp;&ensp;&ensp;&ensp;
            <button class="btn btn-outline-info my-2 my-sm-0 text-left"><a href="/ingredients/all" class="text-decoration-none" >Ingredients list</a></button>
          </div>


        </body>
      </html>
    );
  }
}

module.exports = Home;
