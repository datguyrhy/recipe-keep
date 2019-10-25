const React = require('react');
const Navbar = require(".././Nav/navbar.jsx");

class Create extends React.Component {
  render(){
    return(
      <html>
        <body>
          <h1>Account created</h1>
          <p>Username: {this.props.result.username} </p>
          <p>Password: {this.props.result.password}</p>
        </body>
      </html>
    )
  }
}

module.exports = Create;
