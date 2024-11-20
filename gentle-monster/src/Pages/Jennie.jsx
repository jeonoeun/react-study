import React from "react";
import "../css/pages.scss";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, { Autoplay, EffectFade } from "swiper";

const Jennie = () => {
  return (
    <section className="jennie">
      <img
        className="main-img"
        src={process.env.PUBLIC_URL + "/images/item04.jpg"}
        alt=""
      />
      <div className="des">
        <span className="des-title">JENTLE GARDEN CAMPAIGN</span>
        <span className="s-title">Gentle Monster X Jennie</span>
        <p>
          블랙핑크 제니와 파리 베이스 포토그래퍼 휴고 콤트가 함께한 이번
          젠틀가든 캠페인은 <br /> 정원을 모티브로한 상상과 판타지를 담았습니다.
        </p>
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
          <img src={process.env.PUBLIC_URL + "/images/item03.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/item03.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/jennie01.png"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/jennie02.png"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/jennie03.png"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/jennie04.png"} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Jennie;
