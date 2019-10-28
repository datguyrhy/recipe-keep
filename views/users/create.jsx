const React = require('react');
const Navbar = require(".././Nav/navbar.jsx");

class Create extends React.Component {
  render(){
    return(
      <html>
        <body>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <Navbar/>
          <h1>Account created</h1>
          <p>Username: {this.props.result.username} </p>
          <p>Password: {this.props.result.password}</p>
        </body>
      </html>
    )
  }
}

module.exports = Create;
