import React, { useState } from "react";
import MainCategory from "./MainCategory";

const MainTab = ({ shopList }) => {
  const link = ["pencil", "liquid", "powder"];
  const [alink, setAlink] = useState(0);
  return (
    <section className="MainTab sc">
      <h2>Best Product</h2>
      <ul className="bp_tab">
        <li>
          {link.map((it, idx) => {
            return <li onClick={() => setAlink(idx)}>{it}</li>;
          })}
        </li>
      </ul>
      <MainCategory shopList={shopList} category={link[alink]} />
    </section>
  );
};

export default MainTab;
