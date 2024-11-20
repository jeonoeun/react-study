import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation } from "swiper";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Program = ({ item }) => {
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
      swiper.navigation.update();
    },
  };
  return (
    <section className="program">
      <div className="container">
        <div className="left">
          <h2>2022 BIFF 공식상영작</h2>
          <span>
            <a href="/">MORE</a>
          </span>
        </div>
        <div className="swiper-button">
          <button ref={navigationPrevRef} className="prev">
            <i className="xi-angle-left-min"></i>
          </button>
          <button ref={navigationNextRef} className="next">
            <i className="xi-angle-right-min"></i>
          </button>
        </div>
      </div>
      <Swiper
        {...swiperParams}
        rewind={true}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="program-swiper"
      >
        {item.map((slide, idx) => (
          <SwiperSlide key={slide.id}>
            <Link to={"/detail/" + slide.id}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "./images/program__0" +
                  (idx + 1) +
                  ".jpg"
                }
                alt=""
              />
              <div className="textbox">
                <span className="tit">{slide.tit}</span>
                <span className="title">{slide.title}</span>
                <span className="director">{slide.director}</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Program;
