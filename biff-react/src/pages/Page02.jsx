import React from "react";
import "../css/page.scss";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Page02 = () => {
  const activeStyle = {
    color: "#d82f36",
  };
  return (
    <section className="page02">
      <div className="container">
        <div className="sec-title">
          <span>제 27회 부산국제영화제</span>
          <h1>수상작 및 수상자 리스트</h1>
        </div>
        <ul>
          <li>
            <NavLink
              to="/page02/thisYear"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              • 올해의 아시아영화인상
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page02/gonlo"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              • 한국영화공로상
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page02/actor"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              • 올해의 배우상
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page02/winnerList"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              • 수상작 및 수상자 리스트
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};

export default Page02;
