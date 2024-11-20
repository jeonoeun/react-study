
const CONTENT = [
    { id: 1, title: "엘리베이터", dec: "단순한 수직운송수단을 넘어 빌딩의 가치를 높여 드립니다.", link: "/a" },
    { id: 2, title: "에스컬레이터 & 무빙워크", dec: "편안한 승차감과 안전성, 경제성으로 최고의 고객감동을 실현합니다.", link: "/a" },
    { id: 3, title: "주차시스템", dec: "다양한 제품으로 주차 공간 확보에 대한 고민을 해결해 드립니다.", link: "/a" },
]

const MainContent = () => {
    return (
        <section className="MainContent csc">
            <h2>사람과 사람을 연결하는 종합 승강기 기업</h2>
            <p>최고의 기술과 서비스로 편리하고 풍요로운 세상을 만들어갑니다.</p>
            <div className="inner">
                {
                    CONTENT.map(content => {
                        return (
                            <figure key={content.id}>
                                <div className="box">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/section1_" + content.id + ".jpg"} alt="" />
                                </div>
                                <div className="tit">{content.title}</div>
                                <div className="dec">{content.dec}</div>
                                <a href={content.link} className="cbtn">자세히 보기</a>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default MainContent;