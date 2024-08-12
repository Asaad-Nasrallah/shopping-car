/* eslint-disable no-unused-vars */
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Item({ description, price, title, image, id }) {
  const { getItemQuantity, addItem, deleteItem } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      <div className="border-2 rounded border text-center text-md-start justify-content-center align-items-center d-flex flex-column gap-1 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
        <img
          className=" mt-2"
          src={image}
          alt="Card image cap"
          width={"100px"}
          height={"150vh"}
        />

        <div className="bg-white">
          <span className="fw-bold">{title}</span> <br />
          <span className="">${description.slice(0, 100)}</span>
          <div className="text-warning">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <div className="d-flex justify-content-between align-items-bottom">
            <p className="fw-bold ms-1">${price}</p>{" "}
            <Link
              onMouseLeave={(e) => {
                e.target.style.color = "blue";
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "red";
              }}
              className="me-3"
              to={`/details/${id}`}
              style={{ textDecoration: "none", fontSize: "13px" }}
            >
              see more
            </Link>
          </div>
        </div>

        <div className="text-center">
          {!quantity ? (
            <button
              href="#"
              className="btn btn-primary mb-3 fw-bold w-100"
              onClick={() => {
                addItem(id);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button
              href="#"
              className="btn btn-danger mb-3 fw-bold w-100"
              onClick={() => {
                deleteItem(id);
              }}
            >
              Remove From Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Item;
