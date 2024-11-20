import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";

const MV = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

const MainVisual = () => {
  const [IDX, setIDX] = useState();
  useEffect(() => {
    setIDX(0);
  }, []);

  const [swiper, setSwiper] = useState(null);
  const [mainImageIndex, setmainImageIndex] = useState(0);

  SwiperCore.use([Navigation]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperParams = {
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.activeIndex = mainImageIndex;
      swiper.navigation.update();
    },
    onSwiper: setSwiper,
    onSlideChange: (e) => setmainImageIndex(e.activeIndex),
  };
  return (
    <section className="MainVisual section">
      <Swiper
        {...swiperParams}
        ref={setSwiper}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        effect={"fade"}
        modules={[Autoplay, EffectFade, Navigation]}
        className="main-swiper"
      >
        {MV.map((slide, idx) => (
          <SwiperSlide className="swiper-slide" key={slide.id}>
            <img
              src={
                process.env.PUBLIC_URL +
                "./images/visual__0" +
                (idx + 1) +
                ".jpg"
              }
              alt=""
            />
            <div className="inner-text">
              <span>제27회 부산국제영화제</span>
              <strong>수상작 및 수상자</strong>
              <Link to="/page02/thisYear">
                <button>🡒</button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
        <button ref={navigationPrevRef} className="prevBtn">
          <img
            alt="prevButton"
            src={process.env.PUBLIC_URL + "/images/icon_arrow_prev.png"}
          />
        </button>
        <button ref={navigationNextRef} className="nextBtn">
          <img
            alt="NextButton"
            src={process.env.PUBLIC_URL + "/images/icon_arrow_next.png"}
          />
        </button>
      </Swiper>
    </section>
  );
};

export default MainVisual;
