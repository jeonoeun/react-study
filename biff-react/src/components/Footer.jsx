import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="ft-bt">
        <div className="top-content container">
          <ul>
            <li>
              <Link to="/">부서별 연락처</Link>
            </li>
            <li>
              <Link to="/">
                <strong>개인정보취급방침</strong>
              </Link>
            </li>
            <li>
              <Link to="/">
                <strong>공지사항</strong>
              </Link>
            </li>
            <li>
              <Link to="/">
                <strong>채용안내</strong>
              </Link>
            </li>
          </ul>
          <div className="logo-box">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "./images/logo_01.png"}
                alt=""
              />
            </Link>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "./images/logo_02.png"}
                alt=""
              />
            </Link>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "./images/logo_03.png"}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="bt-content container">
          <div className="inner-text">
            <ul>
              <li>
                부산사무국(48058) 부산광역시 해운대구 수영강변대로 120
                영화의전당 비프힐 3층지도대표전화 1688-3010
              </li>
              <li>
                서울사무소(03131) 서울특별시 종로구 율곡로 84 가든타워
                1601호지도전화 02-3675-5097
              </li>
              <li>
                <p>© Busan International Film Festival / made by AccessICT</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
