import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/firebase";
import "./Main.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "../ProductCard/ProductCard";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";

const Main = () => {
  const navigate = useNavigate();

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

  const { data: products } = useQuery(["products"], getProducts);
  return (
    <section className="home">
      <div className="main-content">
        <div className="img-wrapper">
          <img
            className="main-image"
            src={process.env.PUBLIC_URL + "/images/main-img.jpg"}
            alt=""
          />
          <div className="img-text">
            <span className="text-title">BOLD COLLECTION WITH SON</span>
            <div className="btn-wrapper">
              <button className="new-btn">
                <Link to="/products">신제품 보기</Link>
              </button>
              <button className="detail-btn">
                <Link to="/brandIssue">자세히 보기</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="des">
            <p>
              젠틀몬스터가 축구선수 손흥민과 함께 새로운 컬렉션 라인 ‘BOLD’의
              캠페인을 선보입니다. 새로 출시되는 볼드 컬렉션은 <br /> 은하의 별
              형상을 용감함과 대담함의 은유적 상징으로 제품에 표현했습니다.
              대담하게 새로운 역사를 써내려가는 손흥민 <br />
              선수와 함께한 볼드 컬렉션을 통해 서로 다른 분야의 한계를 뛰어 넘은
              순간을 만나보세요.
            </p>
          </div>
          <Swiper
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            effect={"fade"}
            modules={[EffectFade, Autoplay]}
            className="img-swiper"
            onClick={() => {
              navigate("/brandIssue");
            }}
          >
            <SwiperSlide>
              <img src={process.env.PUBLIC_URL + "/images/item01.jpg"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={process.env.PUBLIC_URL + "/images/item05.jpg"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={process.env.PUBLIC_URL + "/images/item04.jpg"} alt="" />
            </SwiperSlide>
          </Swiper>
          <section className="list-sec">
            <h2>Featured Products</h2>
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              modules={[Navigation]}
              className="list-swiper"
              {...swiperParams}
            >
              <ul>
                {products &&
                  products.map((product) => (
                    <SwiperSlide className="item">
                      <ProductCard key={product.id} product={product} />
                    </SwiperSlide>
                  ))}
              </ul>
            </Swiper>
            <div className="swiper-button">
              <button ref={navigationPrevRef} className="prev">
                <i className="xi-angle-left-min"></i>
              </button>
              <button ref={navigationNextRef} className="next">
                <i className="xi-angle-right-min"></i>
              </button>
            </div>
          </section>

          <section className="trend">
            <h2>Trending Now</h2>
            <div className="content">
              <div
                className="flex-wrapper"
                onClick={() => {
                  navigate("/brandIssue");
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/trend01.png"}
                  alt=""
                />
                <div className="flex-des">
                  <span>제니 in 젠틀 가든</span>
                  <button>
                    <Link to="/brandIssue">자세히 보기</Link>
                  </button>
                </div>
              </div>
              <div className="flex-wrapper">
                <img
                  src={process.env.PUBLIC_URL + "/images/trend02.png"}
                  alt=""
                />
                <div className="flex-des">
                  <span>몽클레르 X 젠틀몬스터</span>
                  <button>
                    <Link to="/brandIssue">자세히 보기</Link>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Main;
