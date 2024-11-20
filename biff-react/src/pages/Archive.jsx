import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Link } from "react-router-dom";

import { Autoplay, EffectCoverflow, Navigation } from "swiper";

const Archive = ({ list }) => {
  return (
    <section className="archive">
      <div className="container">
        <h2>BIFF Archive</h2>
        <p>역대 영화제 (2022 ~ 2011)</p>
      </div>
      <Swiper
        effect={"coverflow"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Navigation]}
        className="archive-swiper"
      >
        {list.map((ar, idx) => (
          <SwiperSlide className="swiper-slide" key={ar.id}>
            <Link to="/page04">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "./images/poster__0" +
                  (idx + 1) +
                  ".jpg"
                }
                alt=""
              />
            </Link>
            <p>{ar.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Archive;
