const React = require('react');
const Navbar = require(".././Nav/navbar.jsx");

class New extends React.Component {
    render() {

        return (<html>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <body>
                <Navbar/>
                <div className="container-fluid">
                  <div className="col-5 offset-5">
                    <h1>Login</h1>
                    <form action="/login" method="POST">
                        <p>Username</p>
                        <input type="text" name="username"/><br/><br/>
                        <p>Password</p>
                        <input type="text" name="password"/><br/><br/>
                        <button class="btn btn-outline-info my-2 my-sm-0 text-left" type="submit" value="Login">Login</button>
                    </form>
                    </div>
                </div>
            </body>
        </html>)
    }
}

module.exports = New;
