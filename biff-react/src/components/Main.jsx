import React from "react";
import Archive from "../pages/Archive";
import MainVisual from "../pages/MainVisual";
import News from "../pages/News";
import Program from "../pages/Program";

const Main = ({ item, list }) => {
  return (
    <div className="Main">
      <MainVisual />
      <Program item={item} />
      <News />
      <Archive list={list} />
    </div>
  );
};

export default Main;
