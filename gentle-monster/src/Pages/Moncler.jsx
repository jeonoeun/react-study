import React from "react";
import "../css/pages.scss";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, { Autoplay, EffectFade } from "swiper";

const Moncler = () => {
  return (
    <section className="moncler">
      <video
        src={process.env.PUBLIC_URL + "/videos/show2.mp4"}
        loop
        autoPlay
        muted
      ></video>

      <div className="m-des">
        <span className="des-title">MONCLER + GENTLE MONSTER</span>
        <p>
          글로벌 패션 아이웨어 브랜드 젠틀몬스터가 지난 9월 몽클레르
          지니어스쇼에서 선보였던 컬렉션을 출시합니다. <br /> 이번 컬렉션에는
          아이웨어 뿐만 아니라 젠틀몬스터가 디자인한 의류 제품을 함께
          선보입니다.
        </p>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/images/keyvisual.jpg"}
        alt=""
      />
      <div className="swiper-des">
        <div className="left-box">
          HAUS DOSAN <br /> POP-UP STORE
        </div>
        <div className="right-box">
          <p>
            몽클레르 지니어스 컬렉션을 기념해 하우스 도산에서 특별 팝업 공간을
            한 달간 선보입니다. 현실과 디지털 세계 사이의 모호함 속에서
            ‘스와이프’ 모션을 통해 느껴지는 감정들을 몽클레르와 젠틀몬스터의
            감각으로 풀어낸 설치물과 컬렉션 제품에 담았습니다.
          </p>
          <span>
            2022년 5월 5일 – 5월 30일, 월요일 - 일요일 11:00am – 09:00pm <br />
            서울특별시 강남구 압구정로46길 50
          </span>
        </div>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          // disableOnInteraction: true,
        }}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        className="img-swiper"
      >
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/m_01.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/m_02.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/m_03.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/m_04.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/m_05.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/m_06.jpg"} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Moncler;
