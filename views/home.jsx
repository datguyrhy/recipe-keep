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
            crossOrigin="anonymous"></link>
            <link rel="stylesheet" href="/home.css"></link>
        </head>
        <body>
         <Navbar/>
          <div className="container-fluid">
            <div className="row no-gutters">
              <div className="d-flex justify-contents-center">
              <div class="cardposition card bg-dark text-white ">
                <img src="https://i.imgur.com/a2gSdFb.jpg" class="card-img" href="/recipes/all"/>
                <div className="card-img-overlay d-flex flex-column justify-contents-center">
                  <div><a href="/recipes/all">
                  <h4 className="card-title">Recipebook</h4><br/>
                  <p className="justify-content-end card-text">Welcome back to recipedia have a look at our list of recipes contributed by the community</p>
                      </a></div>
                </div>
              </div>

              <div class="cardposition card bg-dark text-white ing">
                <img src="https://i.imgur.com/lzTlsq9.jpg" class="card-img ing-2"/>
                <div className="card-img-overlay d-flex flex-column justify-contents-center ing">
                  <div><a href="/ingredients/all">
                  <h4 className="card-title">Ingredients</h4><br/>
                  <p className="justify-content-end card-text">Take a look at our ingredient list </p>
                  </a></div>
                </div>
              </div>
              <div class="cardposition card bg-dark text-white ing">
                <img src="https://i.imgur.com/RiaTFXW.jpg" class="card-img ing-3" />
                <div className="card-img-overlay d-flex flex-column justify-contents-center ing">
                  <div><a href="/ingredients/all">
                  <h4 className="card-title">Ingredients</h4><br/>
                  <p className="justify-content-end card-text">Take a look at our ingredient list </p>
                  </a></div>
                </div>
              </div>

              </div>
            </div>
            <div className="row">
              <div className="d-flex justify-contents-center">
              <div class="cardposition card text-white ">
                <img src="https://i.imgur.com/a2gSdFb.jpg" class="card-img" href="/recipes/all"/>
                <div className="card-img-overlay d-flex flex-column justify-contents-center">
                  <div><a href="/recipes/all">
                  <h4 className="card-title">Recipebook</h4><br/>
                  <p className="justify-content-end card-text">Welcome back to recipedia have a look at our list of recipes contributed by the community</p>
                      </a></div>
                </div>
              </div>

              <div class="cardposition card text-white ">
                <img src="https://i.imgur.com/4w9QwEa.jpg" class="card-img "/>
                <div className="card-img-overlay d-flex flex-column justify-contents-center ing">
                  <div><a href="/recipes/2">
                  <h4 className="card-title">Oxtail Stew</h4><br/>
                  <p className="justify-content-end card-text">Slow Simmered </p>
                  </a></div>
                </div>
              </div>
              <div class="cardposition card ing-6">
                <img src="https://i.imgur.com/WBxKtKr.jpg" class="card-img ing-6" />
                <div className="card-img-overlay d-flex flex-column justify-contents-center ing">
                  <div><a href="/ingredients/all">
                  <h4 className="card-title">Ingredients</h4><br/>
                  <p className="justify-content-end card-text">Take a look at our ingredient list </p>
                  </a></div>
                </div>
              </div>

              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;
