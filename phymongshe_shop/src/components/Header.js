import React, { useEffect, useState } from "react";
import MainNav from "./MainNav";
import TopBanner from "./TopBanner";
import "../css/Header.scss";
import { FiShoppingCart, FiUserPlus, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = ({ cart, shopList }) => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const scrollEvent = () => {
      let sct = window.scrollY;
      sct > 0 ? setOn(true) : setOn(false);
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);
  return (
    <header className={`Header ${on ? "on" : ""}`}>
      <TopBanner />
      <div className="gnb">
        <h1>
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/top_logo.png"}
              alt=""
            />
          </Link>
        </h1>
        <nav className="inner">
          <MainNav shopList={shopList} />
        </nav>
        <ul className="rt">
          <li>
            <FiUserPlus />
          </li>
          <li>
            <FiShoppingCart />
            <span>{cart.length}</span>
          </li>
          <li>
            <FiSearch />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
