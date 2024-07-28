/* eslint-disable no-unused-vars */
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

function ShoppingCart() {
    const {cartItems} = useShoppingCart()
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        Toggle static offcanvas
      </button>
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        data-bs-backdrop="static"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bolder" id="staticBackdropLabel">
            Cart
          </h5>
          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <div>{
            cartItems.map((item)=>(
                <CartItem key={item.id} {...item}/>
            ))}</div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
