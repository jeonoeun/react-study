import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import useProducts from "../hooks/useProducts";
import "../components/Products/Products.scss";

const Sunglasses = () => {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <section className="products">
        <div className="container">
          <ul>
            {products &&
              products
                .filter((product) => product.catecory === "선글라스")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Sunglasses;
