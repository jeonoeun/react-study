import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Navigation } from "swiper";

const DB = [
  {
    id: 1,
    content: "여행이지 X 와그\n싱가포르",
    desc: "기간한정 입장권 최대 5% 할인 혜택!",
  },
  {
    id: 2,
    content: "일생 단 한번!\n버킷리스트 여행",
    desc: "캐나다 옐로나이프 VS 아이슬란드",
  },
  {
    id: 3,
    content: "대한항공 직항\n두바이&아부다비",
    desc: "다시 또, AGAIN 두바이&아부다비 5/6일",
  },
  { id: 4, content: "추억이\n추억을 선물하네", desc: "황금연휴 일본여행" },
  {
    id: 5,
    content: "9월 3일, 입국 전\n코로나검사 전면 폐지!",
    desc: "지금 바로 떠날 수 있는 여행이지 BEST 여행지를 확인해보세요.",
  },
];

function MainVisual() {
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
    navigation: { prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current },
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
    height: "100vh",
  };

  return (
    <Swiper
      {...swiperParams}
      ref={setSwiper}
      style={swiperStyle}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {DB.map((slide, idx) => (
        <SwiperSlide>
          <figure className={"item0" + slide.id + ((idx === mainImageIndex - 1) ? ' on' : '')}>

            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/main-visual0" +
                (idx + 1) +
                ".jpg"
              }
            />
            <div className="visual_text">
              <p>{slide.desc}</p>
              <h2>{slide.content}</h2>
            </div>
          </figure>
        </SwiperSlide>
      ))}
      <button ref={navigationPrevRef} className="prevBtn">
    <img alt="prevButton" src={process.env.PUBLIC_URL +
                "/assets/images/icon_arrow_prev.png"}/>
      </button>
      <button ref={navigationNextRef}  className="nextBtn">
    <img alt="NextButton" src={process.env.PUBLIC_URL +
                "/assets/images/icon_arrow_next.png"}/>
      </button>
    </Swiper>
  );
}

export default MainVisual;