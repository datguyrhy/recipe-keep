var React = require('react');

class Navbar extends React.Component {
  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light " style={{
        backgroundColor: "#ff78ae"
      }}>
      <a href="/" class="navbar-brand mb-0 h1">Recipedia</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <a class="nav-link" href="/home" className="display-3">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/recipes/all">See All recipes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/recipes/new">Add Recipes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ingredients/add">Add Ingredients</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ingredients/all">Ingredients</a>
          </li>
        </ul>
        

      </div>
    </nav>);

  }
}

module.exports = Navbar;
