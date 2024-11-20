import React, { useState } from "react";
import { uploadImage } from "../../api/uploader";
import useProducts from "../../hooks/useProducts";
import "../NewProduct/NewProduct.scss";

const NewProduct = () => {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const addProduct = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("성공적으로 제품이 추가되었습니다.");
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className="newProduct">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="title">새로운 제품 등록</h2>
          {success && <span className="alert">🔔 {success}</span>}
        </div>
        <div className="inner">
          <div className="product-image">
            {file ? (
              <img
                className="image-file"
                src={URL.createObjectURL(file)}
                alt="local file"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="no-file">🚫 No File</div>
            )}
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="file"
              accept="image/*"
              name="file"
              required
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              name="title"
              value={product.title ?? ""}
              placeholder="제품명"
              required
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              name="price"
              value={product.price ?? ""}
              placeholder="가격"
              required
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              name="catecory"
              value={product.catecory ?? ""}
              placeholder="카테고리"
              required
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              name="description"
              value={product.description}
              placeholder="제품 설명"
              required
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              name="options"
              value={product.options ?? ""}
              placeholder="옵션(콤마(,)로 구분)"
              required
              onChange={handleChange}
            />
            <button className="button">
              {isUploading ? "업로드중..." : "제품 등록하기"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
