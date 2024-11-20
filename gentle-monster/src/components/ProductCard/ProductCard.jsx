import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  product,
  product: { id, image, title, catecory, price },
}) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="item"
    >
      <div className="photo-wrapper">
        <img className="item-img" src={image} alt={title} />
      </div>
      <div className="text">
        <span className="cate">{catecory}</span>
        <div className="detail">
          <h3>{title}</h3>
          <span className="price">{`${price},000 원`}</span>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
