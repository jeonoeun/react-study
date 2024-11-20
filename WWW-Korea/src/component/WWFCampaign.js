import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import { EffectCreative, Pagination, Controller } from "swiper";

const CB = [
  { id: 1, content: "CLIMATE CRISIS", desc: "WWF CAMPAIGN" },
  { id: 2, content: "PLASTIC FREE", desc: "WWF CAMPAIGN" },
  { id: 3, content: "POLARBEAR", desc: "WWF CAMPAIGN" },
];

const FB = [{ id: 1 }, { id: 2 }, { id: 3 }];

const DB = [
  {
    id: 1,
    content: "기후변화를 넘어선 ‘기후위기’\n브레이크를 잡아야 할 때입니다.",
  },
  {
    id: 2,
    content: "넘쳐나는 플라스틱 문제는\n인간의 생명까지 위협하고 있습니다.",
  },
  {
    id: 3,
    content: "기후변화로 인한 북극곰의 위기는\n현재도 진행 중입니다.",
  },
];

const GB = [{ id: 1 }, { id: 2 }, { id: 3 }];

const WWFCampaign = () => {
  //스와이퍼 연동
  const as = useRef(null);
  const bs = useRef(null);

  useEffect(() => {
    const ass = as.current.swiper;
    const bss = bs.current.swiper;
    if (ass.controller && bss.controller) {
      ass.controller.control = bss;
      bss.controller.control = ass;
    }
  }, []);

  const swiperStyle01 = {
    width: "45%",
    height: "560px",
  };
  const swiperStyle02 = {
    width: "55%",
    height: "560px",
  };
  const swiperStyle03 = {
    width: "45%",
    height: "370px",
  };
  const swiperStyle04 = {
    width: "55%",
    height: "370px",
  };

  return (
    <section className="WWFCampaign">
      <div className="cp-top">
        {/* ------ Swiper01 ------ */}
        <Swiper
          ref={as}
          style={swiperStyle01}
          direction={"vertical"}
          speed={600}
          pagination={{
            clickable: true,
          }}
          loop={true}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, 0],
            },
            next: {
              translate: [0, "100%", 0],
            },
          }}
          modules={[EffectCreative, Pagination, Controller]}
          className="campaignSwiper01"
        >
          {CB.map((slide) => (
            <SwiperSlide key={slide.id}>
              <figure className={"item0" + slide.id}>
                <div className="container">
                  <div className="visual_text">
                    <p>{slide.desc}</p>
                    <h2>{slide.content}</h2>
                  </div>
                </div>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ------ Swiper02 ------ */}
        <Swiper style={swiperStyle02} loop={true} className="campaignSwiper02">
          {FB.map((slide, idx) => (
            <SwiperSlide key={slide.id}>
              <figure className={"item0" + slide.id}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/ori0" +
                    slide.id +
                    ".jpg"
                  }
                  alt=""
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="cp-bottom">
        {/* ------ Swiper03 ------ */}
        <Swiper
          ref={bs}
          style={swiperStyle03}
          direction={"vertical"}
          speed={600}
          loop={true}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, 0],
            },
            next: {
              translate: [0, "100%", 0],
            },
          }}
          modules={[EffectCreative, Controller]}
          className="campaignSwiper03"
        >
          {DB.map((slide, idx) => (
            <SwiperSlide key={slide.id}>
              <div className={"item0" + slide.id}>
                <p>{slide.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ------ Swiper04 ------ */}
        <Swiper style={swiperStyle04} loop={true} className="campaignSwiper04">
          {GB.map((slide, idx) => (
            <SwiperSlide key={slide.id}>
              <div className={"item0" + slide.id}>
                <strong>{"0" + slide.id}</strong>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WWFCampaign;
