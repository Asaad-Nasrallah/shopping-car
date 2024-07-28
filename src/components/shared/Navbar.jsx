import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
function Navbar() {
  const { totalQuantity } = useShoppingCart();
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-primary fw-bold ">
        <nav className=" container ">
          <Link className="navbar-brand text-white" to="#">
            Shopping
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <Link className="nav-item nav-link text-white" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link text-white" to="/store">
                Store
              </Link>
              <button
                className="border-0 bg-primary text-white pt-1"
                data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdrop"
                aria-controls="staticBackdrop"
                style={{ position: "relative" }}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                
                <span
                  className=" bg-danger text-white  rounded-circle"
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    width: "1.1rem",
                    height: "1.1rem",
                    fontSize: "0.7rem",
                  }}
                >
                  {totalQuantity}
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
