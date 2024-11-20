import React from "react";

const Actor = () => {
  return (
    <div className="actor detail">
    <p className="tit">
    올해의 배우상은 뉴 커런츠 한국 작품과 한국영화의 오늘-비전 부문 작품을 대상으로 한국 장편독립영화의 새로운 배우들을 주목하기 위한 상이다. 한국을 대표하는 남, 여 배우 각 1인이 심사위원으로 나서며, 최고의 남, 여 배우 1명씩 선정해 폐막식에서 각각 5백만원의 상금을 수여한다. 상금은 부산국제영화제 후원회에서 후원한다.
    </p>
    <div className="inner">
      <img src={process.env.PUBLIC_URL + "../images/actor02.jpg"} alt="" />
      <div className="textbox">
        <span className="name">김금순</span>
        <span className="detail"> &lt;울산의 별&gt; | 대한민국</span>
        <p>
          <strong>심사평</strong>
          <br />
          울산 바다같이 넓고 깊고 푸른 연기를 보여준 그녀에게 희망찬 박수를 보내고 싶다. 아직도 이렇게 훌륭한 배우를 몰랐다니 나의 무지를 탓한다. 그녀는 충분히 젊고 새롭고 신선한 배우이자 올해 주목받아 마땅한 찬란한 배우이다.
        </p>
      </div>
    </div>
    <div className="inner">
      <img src={process.env.PUBLIC_URL + "../images/actor01.jpg"} alt="" />
      <div className="textbox">
        <span className="name">김영성</span>
        <span className="detail"> &lt;빅슬립&gt; | 대한민국</span>
        <p>
          <strong>심사평</strong>
          <br />
          이번 제27회 부산국제영화제에서는 역시 영화제의 위상에 걸맞는 좋은 영화들을 볼 수 있어서 행복한 시간이었습니다. 제가 심사한 올해의 배우상 배우들의 좋은 연기들을 보면서 저의 연기에 대해서도 다시금 생각해 보는 좋은 기회였고 우리 영화에 아직 숨겨진 보석 같은 배우들이 많다는 걸 느꼈습니다. 수상자에게 축하의 말씀을 전하며 부산국제영화제가 우리 모두의 축제로 더욱 빛나길 기원하겠습니다!
        </p>
      </div>
    </div>
  </div>
  );
};

export default Actor;
