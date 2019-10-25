const React = require('react');
const Navbar = require(".././Nav/navbar.jsx");

class Register extends React.Component {
  render(){

    return(
      <html>
        <body>
          <h1>Register</h1>
          <form action="/register" method="POST">
            <p>Username</p>
            <input type="text" name="username"/><br/><br/>
            <p>Password</p>
            <input type="text" name="password"/><br/><br/>
          <button class="btn btn-outline-info my-2 my-sm-0 text-left" type="submit" value="Create Account">Login</button>
          </form>
        </body>
      </html>
    )
  }
}

module.exports = Register;
