import React, { useEffect, useRef } from "react";

const NAVLINK = [
  { id: 1, menu: "WWF Korea 소개", link: "/" },
  { id: 2, menu: "활동", link: "/" },
  { id: 3, menu: "참여", link: "/" },
  { id: 4, menu: "소식", link: "/" },
  { id: 5, menu: "자료", link: "/" },
  { id: 7, menu: "후원", link: "/" },
];

const Header = () => {
  const HL = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sct = window.scrollY;
      sct > 0
        ? HL.current.classList.add("on")
        : HL.current.classList.remove("on");
    });
  });
  return (
    <header className="Header" ref={HL}>
      <div className="hd_wrap">
        <div className="container">
          <h1>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                alt="logo"
              />
            </a>
          </h1>
          <nav className="Gnb">
            <ul>
              {NAVLINK.map((el, index) => {
                return (
                  <li key={el.id}>
                    <a href={el.link}>{el.menu}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="area_util">
            <ul>
              <li>
                <a href="/">FAQ </a>
              </li>
              <li>
                <a href="/">마이페이지</a>
              </li>
              <div className="search_btn">
                <i className="xi-search"></i>
              </div>
            </ul>
            <button className="menu_toggle">
              <i className="xi-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
