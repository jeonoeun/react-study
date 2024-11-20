import React from "react";
import "../Carts/Carts.scss";
import CartItem from "../CartItem/CartItem";
import useCart from "../../hooks/useCart";

const SHIPPING = 3;

const Carts = () => {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProudcts = products && products.length > 0;
  const totalPrice = products.reduce(
    (prev, current) => prev + parseInt(current.price) * current.quantity,
    0
  );

  return (
    <section className="carts">
      <div className="container">
        <div className="products-area">
          <h3>쇼핑백</h3>
          {!hasProudcts && <p>쇼핑백에 담긴 제품이 없습니다.</p>}
          {hasProudcts && (
            <ul className="product-list">
              <li className="list-header">
                <span>상품</span>
                <span>가격</span>
              </li>
              {products &&
                products.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
            </ul>
          )}
        </div>
        <div className="price-area">
          <h3>주문 내역</h3>
          <ul className="price-box">
            <li className="s-price">
              <div>
                <span>상품 금액</span>
                <span>{`${totalPrice},000 원`}</span>
              </div>
              <div>
                <span>배송비</span>
                <span>{`${SHIPPING},000 원`}</span>
              </div>
            </li>
            <li className="total-price">
              <span>총 결제 금액</span>
              <span>{`${totalPrice + SHIPPING},000 원`}</span>
            </li>
            <li className="payment-btn">결제하기</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Carts;
