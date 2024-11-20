import React from "react";
import { Link } from "react-router-dom";

const Page05 = () => {
  return (
    <section className="page05">
      <div className="container">
        <h2>BIFF 공지사항 & 뉴스</h2>
        <p>BIFF 공지사항과 뉴스를 확인하실 수 있습니다.</p>
        <div className="search-box">
          <input type="text" />
          <button className="search-btn">
            <i className="xi-search"></i>
          </button>
        </div>
        <ul className="form-listBox">
          <li>
            <Link>
              <strong>공지</strong> [공지] 예매권 환불 마감 안내
            </Link>
            <span>2022-12-30</span>
          </li>
          <li>
            <Link>
              <strong>공지</strong> [공지] 예매권 환불 신청접수 및 예매교환권
              증정 안내
            </Link>
            <span>2022-12-31</span>
          </li>
          <li>
            <Link>[공지] 제27회 부산국제영화제 폐막식 티켓 현장 판매 안내</Link>
            <span>2023-01-01</span>
          </li>
          <li>
            <Link>[BIFF 보도자료] 제16회 아시아필름어워즈 후보작 공개!</Link>
            <span>2023-01-02</span>
          </li>
          <li>
            <Link>
              [BIFF 보도자료] 부산국제영화제, 제1회 ‘대한민국 K-컬처 대상’ 수상!
            </Link>
            <span>2023-01-03</span>
          </li>
          <li>
            <Link>
              [BIFF 보도자료] 온라인 영화 교육 콘텐츠 ‘민규동과 함께하는
              시네버스’ 론칭!
            </Link>
            <span>2023-01-04</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Page05;
