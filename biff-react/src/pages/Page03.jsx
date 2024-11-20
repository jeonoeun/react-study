import React from "react";
import "../css/page.scss";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Page03 = ({ item }) => {
  const activeStyle = {
    color: "#d82f36",
  };

  return (
    <section className="page03">
      <div className="content">
        <h2>공식상영작</h2>
        <ul>
          <li>
            <NavLink
              to="/page03/open"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              • 개·폐막작
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/page03/today"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              • 한국영화의 오늘
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page03/window"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              • 아시아영화의 창
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page03/new"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              • 뉴 커런츠
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page03/wideAngle"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              • 와이드 앵글
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};

export default Page03;
