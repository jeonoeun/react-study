import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./css/Main.scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Page03 from "./pages/Page03";
import Page04 from "./pages/Page04";
import Page02 from "./pages/Page02";
import Page01 from "./pages/Page01";
import Page05 from "./pages/Page05";
import Open from "./pages/Open";
import Today from "./pages/Today";
import Window from "./pages/Window";
import New from "./pages/New";
import WideAngle from "./pages/WideAngle";
import Gonglo from "./pages/Gonglo";
import Actor from "./pages/Actor";
import WinnerList from "./pages/WinnerList";
import Asia from "./pages/Asia";
import Detail from "./pages/Detail";
import { movies, DB } from "./data";
import Footer from "./components/Footer";
import Page06 from "./pages/Page06";

const App = () => {
  const [item, setItem] = useState([]);
  const [archiveList, setArchiveList] = useState([]);

  useEffect(() => {
    setItem(movies);
  }, []);

  useEffect(() => {
    setArchiveList(DB);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main list={archiveList} item={item} />} />
        <Route path="/page01" element={<Page01 />} />
        <Route path="/page02" element={<Page02 />}>
          <Route path="thisYear" element={<Asia />} />
          <Route path="gonlo" element={<Gonglo />} />
          <Route path="actor" element={<Actor />} />
          <Route path="winnerList" element={<WinnerList />} />
        </Route>
        <Route path="/page03" element={<Page03 />}>
          <Route path="open" element={<Open item={item} />} />
          <Route path="today" element={<Today item={item} />} />
          <Route path="window" element={<Window item={item} />} />
          <Route path="new" element={<New item={item} />} />
          <Route path="wideAngle" element={<WideAngle item={item} />} />
        </Route>
        <Route path="/page04" element={<Page04 list={archiveList} />} />
        <Route path="/page05" element={<Page05 />} />
        <Route path="/page06" element={<Page06 />} />
        <Route path="/detail/:id" element={<Detail item={item} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
