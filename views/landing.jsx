var React = require("react");
const Navbar = require("./Nav/navbar.jsx");
class Landing extends React.Component {
    render() {
        return (<html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            </head>
            <body>
                <Navbar/>
                  <button class="btn btn-outline-info my-2 my-sm-0 text-left"><a href="/register" class="text-decoration-none" >Sign Up</a></button>
                  &ensp;&ensp;&ensp;&ensp;&ensp;
                  <button class="btn btn-outline-info my-2 my-sm-0 text-left"><a href="/login" class="text-decoration-none" >Existing User? Click Here</a></button>
                  &ensp;&ensp;&ensp;&ensp;&ensp;
                  <button class="btn btn-outline-info my-2 my-sm-0 text-left"><a href="/recipes/all" class="text-decoration-none" >Browse recipes</a></button>
                        </body>
                    </html>
                    );
  }
}

module.exports = Landing;
