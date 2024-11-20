import React from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.scss";

const Products = () => {
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
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Products;
