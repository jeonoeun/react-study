import React from "react";
import MainVisual from "./MainVisual";
import MainContent from "./MainContent";
import Customer from "./Customer";

const Main = () => {
  return (
    <main className="Main">
      <MainVisual />
      <MainContent />
      <Customer />
    </main>
  );
};

export default Main;
