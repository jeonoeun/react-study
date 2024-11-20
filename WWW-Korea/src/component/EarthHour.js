import React from "react";
import EList from "./EList";

const EarthHour = () => {
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
              src={process.env.PUBLIC_URL + "/assets/images/earth01.png"}
              alt=""
            />
          </figure>
          <div className="text__gp">
            <p className="text01">
              WWF는 인류가 만든 기후위기와 환경파괴의 심각성을 깨닫고 변화를
              만들기 위해 어스아워(Earth Hour)를 시작했습니다. 2007년 호주에서
              처음 시작된 어스아워는 현재 190여 개국 7,000여 개 도시, 1만
              8,000여 개의 랜드마크가 참여하는 세계 최대의 자연보전 캠페인으로
              자리 잡았습니다.
            </p>
            <div className="title__box">
              <figure className="cube">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/cube.gif"}
                  alt=""
                />
              </figure>
              <h3>
                전등을 끄고 생명의 빛을 켜는<strong> 1시간.</strong>
              </h3>
            </div>
            <p className="text02">
              매년 3월 마지막 토요일 저녁 8시 반부터 진행하는 어스아워의 ‘1시간
              소등’은 사람과 자연이 조화롭게 살아가는 미래를 만들자는 세계적인
              약속의 상징이 되고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarthHour;
