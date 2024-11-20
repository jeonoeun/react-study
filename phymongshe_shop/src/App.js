import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import List from "./shop/List";
import Itm from "./shop/Itm";
import Cart from "./shop/Cart";
import Category from "./shop/Category";
import "./css/ShopDetail.scss";
import { Route, Routes } from "react-router-dom";
//https://desipossa.github.io/shop_cra/assets/data.json

const App = () => {
  const [itm, setItm] = useState();
  const [cart, setCart] = useState([{ id: 1, itm: "ssssssssss", price: 5000 }]);

  useEffect(() => {
    const url = "https://desipossa.github.io/shop_cra/assets/data.json";
    const getProduct = async () => {
      const res = await axios.get(url);

      const shopData = res.data.slice(50, 140).map((it) => {
        return {
          id: it.id,
          name: it.name,
          src: it.image_link,
          brand: it.brand,
          cate: it.category,
          price: it.price * 1450,
          des: it.description,
          color: it.product_colors,
          time: it.created_at,
          type: it.product_type,
        };
      });
      setItm(shopData);
      console.log(res.data);
      console.log(shopData);
    };
    getProduct();
  }, []);
  //데이터 가져오기
  return (
    <>
      {
      itm ? 
        <div className="wrapper">
          <Header cart={cart} shopList={itm} />
          <Routes>
            <Route path="/" element={<Main shopList={itm}/>} />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/shopList/" element={<List shopList={itm} />} />
            <Route
              path="/shopList/:cate"
              element={<Category shopList={itm} />}
            />
            <Route
              path="/shopItem/:itm"
              element={<Itm shopList={itm} cart={cart} setCart={setCart} />}
            />
          </Routes>
        </div>
       : <div>로딩 중 입니다.</div>
      }
      <Footer />
    </>
  );
};

export default App;
