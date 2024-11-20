import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import Search from "./Search";

const NAVLINK = [
  { id: 1, menu: "해외여행", link: "/" },
  { id: 2, menu: "항공", link: "/" },
  { id: 3, menu: "국내여행", link: "/" },
  { id: 4, menu: "허니문", link: "/" },
  { id: 5, menu: "골프", link: "/" },
  { id: 7, menu: "부산/대구 출발", link: "/" },
  { id: 8, menu: "MZ PICK", link: "/" },
  { id: 9, menu: "기업/단체", link: "/" },
];

const Header = (props) => {
  const [search, setSearch] = useState(false);
  const HL = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sct = window.scrollY;
      sct > 0
        ? HL.current.classList.add("on")
        : HL.current.classList.remove("on");
    });
  }, []);

  return (
    <header className="Header" ref={HL}>
      <div className="hd_wrap">
        <h1>
          <a href="/">여행이지</a>
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
              <a href="#!">고객센터 </a>
            </li>
            <li>
              <a href="#!">로그인</a>
            </li>
            <li>
              <a href="#!">회원가입</a>
            </li>
            <li>
              <a href="#!">ENG</a>
            </li>
          </ul>
          <div className="search_btn">
            <strong onClick={() => setSearch(!search)}>
              <i className="xi-search"></i>
            </strong>
            {search && (
              <Modal closeModal={() => setSearch(!search)}>
                <Search/>
              </Modal>
            )}
          </div>
          <div className="menu_toggle">
            <strong>
              <i className="xi-bars"></i>
            </strong>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;