/* eslint-disable no-unused-vars */
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

function ShoppingCart() {
  const { cartItems } = useShoppingCart();
  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="true"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <div className="offcanvas-header bg-primary text-white">
          <h5 className="offcanvas-title fw-bolder" id="staticBackdropLabel">
            Cart
          </h5>
          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="p-2">
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <div className=" h-100 d-flex align-items-center justify-content-center text-secondary">
              <h3>No Items Found in Cart</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
