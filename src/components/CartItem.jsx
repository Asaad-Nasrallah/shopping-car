/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getProduct } from "../services/shopping.service";
import { useShoppingCart } from "../context/ShoppingCartContext";

function CartItem({ id, quantity }) {
  const { addItem, deleteItem } = useShoppingCart();
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProduct(id)
      .then((res) => setProduct(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <div className="d-flex align-items-center gap-2 mt-4">
        <img
          src={product.image}
          alt="Card image cap"
          width={"100px"}
          height={"150vh"}
        />
        <div>
          <span className="fw-bold">{product.title}</span> <br />
          <span className="fw-bold">${product.category}</span> <br />
          <span className="fw-bold">${product.price}</span>
          <div className="text-warning">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <i className="fa-solid fa-cart-shopping"></i>{" "}
          <span className="fw-bold">{quantity}</span>
          <button
            style={{ width: "27px", height: "27px" }}
            className="ms-1"
            onClick={() => {
              addItem(id);
            }}
          >
            +
          </button>
          <button
            style={{ width: "27px", height: "27px" }}
            className="ms-1 me-2"
            onClick={() => {
              deleteItem(id);
            }}
          >
            -{" "}
          </button>
          <span className="fw-bold fs-5">${quantity * product.price}</span>
        </div>
      </div>
    </>
  );
}

export default CartItem;
