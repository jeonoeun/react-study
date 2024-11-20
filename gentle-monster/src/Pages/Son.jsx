import React from "react";
import "../css/pages.scss";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, { Autoplay, EffectFade } from "swiper";

const Son = () => {
  return (
    <section className="son">
      <div className="eve">
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/images/son04.jpg"} alt="" />
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/images/son01.jpg"} alt="" />
        </div>
      </div>
      <p className="son-des">
        젠틀몬스터가 축구선수 손흥민과 함께 새로운 컬렉션 라인 ‘BOLD’의 캠페인을
        선보입니다. 새로 출시되는 볼드 컬렉션은 <br /> 은하의 별 형상을 용감함과
        대담함의 은유적 상징으로 제품에 표현했습니다. 대담하게 새로운 역사를
        써내려가는 손흥민 <br />
        선수와 함께한 볼드 컬렉션을 통해 서로 다른 분야의 한계를 뛰어 넘은
        순간을 만나보세요.
      </p>
      <div className="antena">
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/images/son02.jpg"} alt="" />
        </div>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/images/son03.jpg"} alt="" />
          <p className="antena-des">
            손흥민 선수가 착용한 이브 01, 안테나 01은 블랙 프레임의 곡선과
            직선이 과감하게 어우러진 제품입니다. <br /> 2023 볼드 컬렉션의
            시그니처 별 심볼이 특징인 프레임들을 지금 만나보세요.
          </p>
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
          <img src={process.env.PUBLIC_URL + "/images/son05.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/main-img.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/images/item06.jpg"} alt="" />
        </SwiperSlide>
      </Swiper>
      <p className="swiper-des">
        <span>BE BOLD, SON</span>
        자신의 한계를 넘어 그 이상을 개척하는, 손흥민과 함께하는 젠틀몬스터
        캠페인은 자신감 넘치는 태도와 힘을 담아 손흥민이라는 인물을 조명합니다.
      </p>
    </section>
  );
};

export default Son;
