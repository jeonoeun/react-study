import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

const DB = [
  {
    id: 1,
    content: "BUILDING A FUTURE IN\nWHICH\nPEOPLE LIVE IN HARMONY\nWITH NATURE",
    desc: "WWF와 함께 만드는\n사람과 자연이 조화로운 미래",
  },
  {
    id: 2,
    content: "BUILDING A FUTURE IN\nWHICH\nPEOPLE LIVE IN HARMONY\nWITH NATURE",
    desc: "WWF와 함께 만드는\n사람과 자연이 조화로운 미래",
  },
  {
    id: 3,
    content: "BUILDING A FUTURE IN\nWHICH\nPEOPLE LIVE IN HARMONY\nWITH NATURE",
    desc: "WWF와 함께 만드는\n사람과 자연이 조화로운 미래",
  },
  {
    id: 4,
    content: "BUILDING A FUTURE IN\nWHICH\nPEOPLE LIVE IN HARMONY\nWITH NATURE",
    desc: "WWF와 함께 만드는\n사람과 자연이 조화로운 미래",
  },
  {
    id: 5,
    content: "BUILDING A FUTURE IN\nWHICH\nPEOPLE LIVE IN HARMONY\nWITH NATURE",
    desc: "WWF와 함께 만드는\n사람과 자연이 조화로운 미래",
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

  const swiperStyle = {
    width: "100%",
  };

  return (
    <section className="MainVisual">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        {...swiperParams}
        ref={setSwiper}
        style={swiperStyle}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        className="mainVisual"
      >
        {DB.map((slide, IDX) => (
          <SwiperSlide key={slide.id}>
            <figure
              className={
                "item0" + slide.id + (IDX === mainImageIndex - 1 ? " on" : "")
              }
            >
              <div className="container">
                <div className="visual_text">
                  <h2>{slide.content}</h2>
                  <p>{slide.desc}</p>
                  <span>
                    <a href="/">MORE</a>
                  </span>
                </div>
              </div>
            </figure>
          </SwiperSlide>
        ))}
        <button ref={navigationPrevRef} className="prevBtn">
          <img
            alt="prevButton"
            src={process.env.PUBLIC_URL + "/assets/images/icon_arrow_prev.png"}
          />
        </button>
        <button ref={navigationNextRef} className="nextBtn">
          <img
            alt="NextButton"
            src={process.env.PUBLIC_URL + "/assets/images/icon_arrow_next.png"}
          />
        </button>
      </Swiper>
    </section>
  );
};

export default MainVisual;
