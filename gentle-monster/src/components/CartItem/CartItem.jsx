import React from "react";
import "./CartItem.scss";
import useCart from "../../hooks/useCart";

const CartItem = ({
  product,
  product: { id, image, title, quantity, price },
  uid,
}) => {
  const { addOrUpdateItem, removeItem } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };

  const handlePlus = () => {
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  };

  const handleDelete = () => removeItem.mutate(id);

  const deleteAlert = () => {
    if (window.confirm("해당 제품을 삭제하시겠습니까?")) {
      handleDelete();
    }
  };

  return (
    <li className="cart-item">
      <div className="product-img">
        <img src={image} alt={title} />
      </div>
      <ul className="item-detail">
        <li className="title-box">
          <span className="title">{title}</span>
          <span>{`${price * quantity},000 원`}</span>
        </li>
        <li className="price">
          <span>{`${price},000 원`}</span>
        </li>
        <li className="quantity-box">
          <div className="quantity-btn">
            <button onClick={handleMinus}>
              <i className="xi-minus-min"></i>
            </button>
            <span>{quantity}</span>
            <button onClick={handlePlus}>
              <i className="xi-plus-min"></i>
            </button>
          </div>
          <button className="delete-btn" onClick={deleteAlert}>
            <span>삭제</span>
          </button>
        </li>
      </ul>
    </li>
  );
};

export default CartItem;
