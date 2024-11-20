import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import SwiperCore, { Navigation } from "swiper";

const Page04 = ({ list }) => {
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
    <section className="page04">
      <div className="container">
        <h2>역대영화제</h2>
        <Swiper
          {...swiperParams}
          ref={setSwiper}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={50}
        >
          {list.map((it, idx) => (
            <SwiperSlide key={it.id}>
              <div className="content">
                <div className="poster">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "./images/poster__0" +
                      (idx + 1) +
                      ".jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="textbox">
                  <h4>{it.title}</h4>
                  <p>{it.des}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button">
          <button ref={navigationPrevRef} className="prev">
            🡐
          </button>
          <button ref={navigationNextRef} className="next">
            🡒
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page04;
