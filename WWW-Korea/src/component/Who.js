import React from "react";
import EList from "./EList";

const Who = () => {
  return (
    <section className="EarthHour">
      <div className="title_bg">
        <div className="earthHour_title">
          <div className="container">
            <span>EARTH HOUR</span>
            <h2>
              <a href="/">어스아워</a>{" "}
            </h2>
          </div>
        </div>
      </div>
      <EList />
      <div className="content">
        <div className="content container">
          <figure className="EIMG">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/earth02.png"}
              alt=""
            />
          </figure>
          <div className="text__gp">
          <p className="text01">
            WWF는 인류가 만든 기후위기와 환경파괴의 심각성을 깨닫고 변화를
            만들기 위해 어스아워(Earth Hour)를 시작했습니다. 2007년 호주에서
            처음 시작된 어스아워는 현재 190여 개국 7,000여 개 도시, 1만 8,000여
            개의 랜드마크가 참여하는 세계 최대의 자연보전 캠페인으로 자리
            잡았습니다.
          </p>
          <div className="title__box">
            <figure className="cube">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/cube.gif"}
                alt=""
              />
            </figure>
            <h3>
            어스아워, <strong>누가 </strong>참여할 수 있나요?
            </h3>
          </div>
          <p className="text02">
          <strong>지구를 사랑</strong> 하고, <strong>기후위기 대응에 동참</strong> 하고자 하는 모든 시민, 기업,
            단체, 기관 등 누구나 참여할 수 있습니다.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
