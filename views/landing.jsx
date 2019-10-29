var React = require("react");
const Navbar = require("./Nav/navbar.jsx");
class Landing extends React.Component {
    render() {
        return (<html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="/landing.css"></link>
            </head>
            <body>
              <Navbar/>
                <div className="container-fluid bg ">
                    <div class="jumbotron jumbotron-fluid ">
                        <div className="row ">
                            <div className="col-12 d-flex flex-column align-items-center">
                                <h3 className="display-4 title">Welcome to Recipedia<br/>One stop for recipes all over the world</h3>

                            </div>
                        </div>
                        <div className="row btn-row">
                            <div className="col-12 d-flex justify-content-center ">
                                <button class="btn btn-outline-info my-2 my-sm-0 text-left">
                                    <a href="/register" class="text-decoration-none">Register Now</a>
                                </button>
                                &ensp;&ensp;&ensp;&ensp;&ensp;
                                <button class="btn btn-outline-info my-2 my-sm-0 text-left">
                                    <a href="/login" class="text-decoration-none">Existing User? Click Here</a>
                                </button>
                                &ensp;&ensp;&ensp;&ensp;&ensp;
                                <button class="btn btn-outline-info my-2 my-sm-0 text-left">
                                    <a href="/home" class="text-decoration-none">Browse recipes</a>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="d-flex justify-contents-around"></div>
                </div>
            </body>
        </html>);
    }
}

module.exports = Landing;
