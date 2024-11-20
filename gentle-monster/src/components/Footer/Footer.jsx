import React from "react";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="footer-nav">
          <div className="nav-item">
            <span>고객 서비스</span>
            <ul>
              <li>문의</li>
              <li>배송</li>
              <li>서비스</li>
              <li>교환 및 반품</li>
              <li>주문조희</li>
              <li>주문취소</li>
              <li>매장 픽업 서비스</li>
              <li>수리서비스 가이드</li>
              <li>제품 사용 가이드</li>
              <li>시리얼 넘버 조회</li>
            </ul>
          </div>
          <div className="nav-item">
            <span>법적 고지</span>
            <ul>
              <li>공지사항</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>쿠키 정책</li>
              <li>기프트카드 이용약관</li>
            </ul>
          </div>
          <div className="nav-item">
            <span>소셜 미디어</span>
            <ul>
              <li>페이스북</li>
              <li>인스타그램</li>
              <li>유튜브</li>
              <li>트위터</li>
              <li>카카오톡</li>
              <li>핀터레스트</li>
              <li>위쳇</li>
              <li>웨이보</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p className="font-title">© 2022 GENTLE MONSTER</p>
          <div className="footer-info">
            <span>주) 아이아이컴바인드</span>
            <span>대표자명: 김한국</span>
            <span> 사업자번호: 119-86-38589</span>
            <span>
              통신판매신고번호: 제 2014-서울마포-1050 호 (사업자 정보 확인)
            </span>
            <span>이메일 문의: cs@gentlemonster.com</span>
            <span>개인정보보호책임자: 정태호</span>
            <span>
              주소: 서울특별시 마포구 어울마당로5길 41 | 대표번호: 1600-2126
              고객님의 안전한 현금자산 거래를 위하여 하나은행과
              채무지급보증계약을 체결하여 보장해드리고 있습니다.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
