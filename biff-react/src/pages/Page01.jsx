import React from "react";

const Page01 = () => {
  return (
    <section className="page01">
      <div className="container">
        <h2>부산국제영화제 소개</h2>
        <figure className="start">
          <img src={process.env.PUBLIC_URL + "./images/intro_01.jpg"} alt="" />
          <h4>부산국제영화제의 시작</h4>
          <p>
            ‘작지만 권위있는 영화제’를 만들고자 하는 마음으로 1996년 9월 13일,
            첫 개막식을 개최했습니다. 서울도 아닌 부산에서 ‘국제 영화제’를
            개최하는 것에 대한 많은 우려 섞인 시선들 속에 우리나라 최초의 국제
            영화제가 첫걸음을 내딛었습니다. 첫 회에는 31개국에서 169편의 작품을
            초청했으며 총 6개관에서 상영을 진행했습니다.
          </p>
        </figure>
        <figure className="now">
          <img src={process.env.PUBLIC_URL + "./images/intro_02.jpg"} alt="" />
          <h4>부산국제영화제는 지금</h4>
          <p>
            우리나라 최초의 국제영화제에서 이제는 명실상부 우리나라 최대의
            국제영화제로 성장한 부산국제영화제는 현재 아시아뿐 아니라 세계
            속에서 많은 영화인들과 관객이 사랑하는 영화 축제가 되었습니다.
            이제는 70~80여개국에서 300여 편이 초청되고 6개로 시작한 상영관은
            현재 최대 37개관까지 늘어났으며, 2022년에는 코로나 이전과 동일한
            수준으로 운영될 수 있도록 준비 중에 있습니다. 이와 함께 지난 2011년
            개관한 부산국제영화제 전용관 ‘영화의 전당’은 부산의 랜드마크로
            자리잡았습니다.
          </p>
        </figure>
        <figure className="future">
          <img src={process.env.PUBLIC_URL + "./images/intro_03.jpg"} alt="" />
          <h4>부산국제영화제의 비전</h4>
          <p>
            부산국제영화제는 지금까지 그래 왔듯이 앞으로도 한국 및 아시아 영화가
            보다 굳건하게 자리매김할 수 있도록 제작지원을 비롯해 다양한 프로그램
            등을 통해 활성화 방안을 모색할 것입니다.
          </p>
        </figure>
      </div>
    </section>
  );
};

export default Page01;
