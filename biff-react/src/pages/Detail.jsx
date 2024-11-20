import React from "react";
import "../css/page.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = ({ item }) => {
  const { id } = useParams();
  const matchItm = item.find((it) => id === String(it.id));
  return (
    <section className="detail">
      <div className="wrapper">
        <figure>
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/program__0" +
              matchItm.id +
              ".jpg"
            }
            alt=""
          />
          <div className="titlebox">
            <div className="title">
              <h2>{matchItm.title}</h2>
              <span className="lng">{matchItm.lng}</span>
            </div>
            <span className="tit">{matchItm.tit}</span>
            <p className="genre">{matchItm.genre}</p>
          </div>
          <button>
            <Link to="/page03/open">
              <i className="xi-bars">
                <span>목록으로</span>
              </i>
            </Link>
          </button>
        </figure>
        <div className="info">
          <div className="note">
            <h3>Program Note</h3>
            <p>{matchItm.note}</p>
          </div>
          <ul>
            <li>
              <h3>Info</h3>
            </li>
            <li>
              제작국가 <span>{matchItm.nation}</span>{" "}
            </li>
            <li>
              제작연도 <span>{matchItm.year}</span>
            </li>
            <li>
              러닝타임 <span>{matchItm.time}</span>
            </li>
            <li>
              상영포맷 <span>{matchItm.format}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Detail;
