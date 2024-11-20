import React from "react";
import { Link, NavLink } from "react-router-dom";

const DATALINK = [
  { content: "어스아워란?", link: "/main" },
  { content: "왜 하나요?", link: "/why" },
  { content: "누가 참여할 수 있나요?", link: "/who" },
  { content: "참여방법", link: "/howTo" },
];

const EList = () => {
  return (
    <div className="Elist">
 <ul className="Elist_items">
      {DATALINK.map((it, idx) => {
        return (
          <li key={idx}>
            <NavLink to={it.link}>{it.content}</NavLink>
          </li>
        );
      })}
    </ul>
    </div>
   
  );
};

export default EList;
