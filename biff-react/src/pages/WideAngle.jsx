import React from "react";
import { Link } from "react-router-dom";

const WideAngle = ({ item }) => {
  return (
    <div className="wideAngle grid">
      <div className="container">
        {item
          .filter((it) => it.tit === "와이드 앵글")
          .map((it) => (
            <Link key={it.id} to={"/detail/" + it.id}>
              <div
                className="card"
                onClick={() => {
                  console.log(it.id);
                }}
              >
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
          ))}
      </div>
    </div>
  );
};

export default WideAngle;
