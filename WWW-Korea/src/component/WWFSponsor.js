import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

const DB = [
  {
    id: 1,
    content: "박서준",
    info: "배우",
    desc: "“ 전 세계적 곳곳에서 벌어지는 대규모 화재, 더위, 가뭄, 홍수 등 계속되는 자연재해는 점점 거대한 두려움으로 다가오고 있습니다. 지속가능한 지구를 위한 WWF의 활동에 응원을 보내며, 기후위기가 더욱 심각해지는 만큼 앞으로 더 많은 분들이 변화에 동참해 주시길 바라는 마음입니다. “",
  },
  {
    id: 2,
    content: "타일러 라쉬",
    info: "방송인·작가",
    desc: "“인간인 저의 존재가 문제를 야기하는 것이 아닌 해결책의 일부가 될 수 있었으면 좋겠다는 생각이죠. 심각한 기후위기를 겪고있는 상황에서 많은 후원자 분들이 지구의 귀한 생명과 생태계를 지켜주는 데 힘을 모아주고 있습니다. 기후위기 문제가 어렵고 복잡해도, 함께라면 해결할 수 있겠다는 희망을 얻게 되는 것 같아요.“",
  },
];

const SB = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const WWFSponsor = () => {
  const swiperStyle = {};

  return (
    <section className="WWFSponsor">
      <div className="container">
        <div className="sponsor_title">
          <h2>WWF-KOREA 홍보대사</h2>
          <p className="sponsor_title_tit">
            WWF-Korea 홍보대사 및 WWF 글로벌 홍보대사는 멸종위기종 및 서식지
            보전, 기후위기 대응을 위한 WWF의 자연보전 활동을 널리 알리고, <br />
            <strong>
              많은 이들의 동참을 끌어내기 위한 다양한 캠페인, 이니셔티브에
              참여하며 선한 영향력을 발휘하고 있습니다.
            </strong>
          </p>
        </div>
        <Swiper
          className="sponsor"
          style={swiperStyle}
          navigation
          modules={[Navigation]}
        >
          {DB.map((slide) => (
            <SwiperSlide key={slide.id} className="sponsor_items">
              <figure className={"item0" + slide.id}>
                <div className="text_group">
                  <strong className="sponsor_name">
                    {slide.content}
                    <span className="sponsor_info">{slide.info}</span>
                  </strong>
                  <p className="sponsor_tit">{slide.desc}</p>
                </div>
                <Swiper
                  modules={[Pagination]}
                  className="sponsorPT"
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                  }}
                >
                  {SB.map((sld) => (
                    <SwiperSlide key={sld.id}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/sponsor0" +
                          slide.id +
                          "_t0" +
                          sld.id +
                          ".png"
                        }
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WWFSponsor;
