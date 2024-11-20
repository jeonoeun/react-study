import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const hide = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sct = window.scrollY;
      sct > 0
        ? hide.current.classList.add("on")
        : hide.current.classList.remove("on");
    });
  }, []);
  return (
    <header className="Header" ref={hide}>
      <div className="hd-top">
        <div className="container">
          <ul className="left-box">
            <li className="biff">
              <Link to="/">BIFF</Link>
            </li>
            <li>
              <Link to="/">Asian Contents & Film Market</Link>
            </li>
            <li>
              <Link to="/">APM</Link>
            </li>
            <li>
              <Link to="/">BAFA</Link>
            </li>
            <li>
              <Link to="/">ACF</Link>
            </li>
            <li>
              <Link to="/">Community BIFF</Link>
            </li>
            <li>
              <Link to="/">Forum BIFF</Link>
            </li>
            <li>
              <Link to="/">PRESS Service</Link>
            </li>
          </ul>
          <ul className="right-box">
            <li>
              <Link to="/">로그인</Link>
            </li>
            <li>
              <Link to="/">1:1 문의</Link>
            </li>
            <li>
              <Link to="/">ENG</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hd-bt">
        <div className="container">
          <h1>
            <Link to="/">
              <img
                className="logo-img"
                src={process.env.PUBLIC_URL + "./images/logo.svg"}
                alt=""
              />
            </Link>
          </h1>
          <nav className="gnb">
            <ul>
              <li>
                <Link to="/page01">부산국제영화제</Link>
              </li>
              <li>
                <Link to="/page02/thisYear">2022 BIFF</Link>
              </li>
              <li>
                <Link to="/page03/open">공식상영작</Link>
              </li>
              <li>
                <Link to="/page04">역대영화제</Link>
              </li>
              <li>
                <Link to="/page05">커뮤니티</Link>
              </li>
              <li>
                <Link to="/page06"># 작품 검색</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
