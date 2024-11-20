import React from "react";
import { Link, NavLink } from "react-router-dom";

const NAVLINK = [
  { content: "깔끔이청소 소개", link: "/sub01" },
  { content: "아파트입주청소", link: "/sub02" },
  { content: "이사/상가청소", link: "/sub03" },
  { content: "사무실청소", link: "/sub04" },
  { content: "질문과답변", link: "/board" },
];
const NavMenu = () => {
  return (
    <ul>
      {
      NAVLINK.map((it, idx) => {
        return (
          <li key={idx}>
            <NavLink to={it.link}>{it.content}</NavLink>
          </li>
        );
      })
      }
    </ul>
  );
};

export default NavMenu;
