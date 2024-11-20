import FamilyLink from "./FamilyLink"
import ServiceLink from "./ServiceLink"

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="ft_top">
                <div className="inner">
                    <ul className="left">
                        <li><a href="#!">개인정보처리방침</a></li>
                        <li><a href="#!">윤리경영 사이버신문고</a></li>
                        <li><a href="#!">현대 고객케어센터 <span>1577-0603</span></a></li>
                    </ul>
                    <div className="right">
                        <ServiceLink />
                    </div>
                </div>
            </div>
            <div className="ft_bottom">
                <div className="inner">
                    <div className="left">
                        <address>충청북도 충주시 충주산단1로 128 현대엘리베이터 </address>
                        <span>COPYRIGHT &copy; 2018 HYUNDAIELEVATOR CO.,LTD. ALL RIGHTS RESERVED</span>
                    </div>
                    <div className="right">
                        <FamilyLink />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer