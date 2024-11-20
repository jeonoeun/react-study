import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useCart from "../../hooks/useCart";
import "../ProductDetail/ProductDetail.scss";

const ProductDetail = () => {
  const { addOrUpdateItem } = useCart();
  const { user, login } = useAuthContext();
  const {
    state: {
      product: { id, image, title, description, catecory, price },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const handleClick = (e) => {
    if (user) {
      const product = { id, image, title, price, quantity: 1 };
      addOrUpdateItem.mutate(product, {
        onSuccess: () => {
          setSuccess("😎 장바구니에 추가되었습니다!");
          setTimeout(() => setSuccess(null), 3000);
        },
      });
    } else {
      login();
    }
  };

  return (
    <section className="product-detail">
      <div className="container">
        <div className="img-cover">
          <img src={image} alt={title} />
        </div>
        <div className="des-box">
          <p className="title">{title}</p>
          <span className="cate">{catecory}</span>
          <span className="price">{`${price},000 원`}</span>
          <p className="des">{description}</p>
          {success && <span className="alert">{success}</span>}
          <div className="btn-wrapper">
            <button className="cart-btn" onClick={handleClick}>
              장바구니
            </button>
            <button className="wish-btn">
              위시리스트 <i className="xi-heart-o"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
