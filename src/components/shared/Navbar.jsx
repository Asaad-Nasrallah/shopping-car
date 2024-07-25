import { Link } from "react-router-dom";
function Navbar() {
    return ( <>
    <div className="navbar navbar-expand-lg navbar-light bg-light">
    <nav className=" container mb-4">
  <Link className="navbar-brand" to="#">Shopping</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ms-auto">
      <Link className="nav-item nav-link" to="/">Home</Link>
      <Link className="nav-item nav-link" to="/store">Store</Link>
      <button className="border-0 bg-light pt-1">
      <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  </div>
</nav>
</div>
    </> );
}

export default Navbar;