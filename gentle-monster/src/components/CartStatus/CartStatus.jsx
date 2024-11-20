import React from "react";
import useCart from "../../hooks/useCart";

const CartStatus = () => {
  const {
    cartQuery: { data: products },
  } = useCart();
  return (
    <div className="cart-status">
      <div className="cart">
        <i className="xi-cart-o"></i>
        {products && <span>{products.length}</span>}
      </div>
    </div>
  );
};

export default CartStatus;
