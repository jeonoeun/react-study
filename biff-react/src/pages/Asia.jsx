import React from "react";

const Asia = () => {
  return (
    <div className="asia detail">
      <p className="tit">
        올해의 아시아영화인상은 한 해 동안 아시아 영화 산업과 문화발전에 있어
        가장 두드러진 활동을 보인 아시아 영화인에게 수여된다. 올해 수상자는
        &lt;비정성시&gt;(1989), &lt;중경삼림&gt;(1994), &lt;해피
        투게더&gt;(1997), &lt;화양연화&gt;(2000), &lt;무간도&gt;(2002) 등 유수의
        작품에 출연하며 홍콩영화를 이끌고 아시아를 넘어 세계무대에서 종횡무진
        활약하는 배우 양조위다.
      </p>
      <div className="inner">
        <img src={process.env.PUBLIC_URL + "../images/asia.jpg"} alt="" />
        <div className="textbox">
          <span className="name">양조위</span>
          <span className="detail">홍콩(중국) | 배우</span>
          <p>
            양조위는 아시아에서 가장 유명한 배우 중 한 명으로 손꼽히는 홍콩
            출신의 배우이자 가수다. 왕가위 감독의 &lt;중경삼림&gt;(1994),
            &lt;해피 투게더&gt;(1997), &lt;화양연화&gt;(2000) 등으로 잘 알려진
            그는 베니스국제영화제 황금사자상을 수상한 세 작품
            &lt;비정성시&gt;(1989)와 &lt;씨클로&gt;(1995), &lt;색,
            계&gt;(2007)에 출연했다. 또한, 2003 미국아카데미 외국어영화상 부문에
            노미네이트된 &lt;영웅: 천하의 시작&gt;(2002)과 &lt;무간도&gt;(2002),
            &lt;샹치와 텐 링즈의 전설&gt;(2021) 등 필모그래피를 쌓아왔다.
            1980년대부터 배우 활동을 시작한 양조위는 2000 칸영화제에서
            남우주연상을 수상하였으며, 이외에도 홍콩영화금상장에서 5관왕,
            금마장에서 3관왕이라는 쾌거를 달성하며 남우주연상 최다 수상자라는
            기록을 세웠다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Asia;
