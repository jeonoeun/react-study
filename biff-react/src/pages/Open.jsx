import React from "react";
import { Link } from "react-router-dom";

const Open = ({ item }) => {
  return (
    <div className="open">
      <div className="container">
        {item
          .filter((it) => it.tit === "개막작" || it.tit === "폐막작")
          .map((it, idx) => (
            <div key={it.id} className="card">
              <Link to={"/detail/" + it.id}>
                <div className="card">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "../images/program__0" +
                      it.id +
                      ".jpg"
                    }
                    alt=""
                  />
                  <div className="textbox">
                    <span className="tit">{it.tit}</span>
                    <span className="title">{it.title}</span>
                    <span className="director">{it.director}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Open;
