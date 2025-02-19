import React from "react";
import "../../styles/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="ico-brunch ico-brunch-logo"></span>
            <p className="quote">
              You can make anything
              <br /> by writing.
            </p>
            <p className="author">C.S.Lewis</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <div className="link-column">
              <h3>브런치 이용안내</h3>
              <ul>
                <li>작가신청</li>
                <li>작가 지원 프로젝트</li>
                <li>제휴제안</li>
                <li>고객센터</li>
              </ul>
            </div>
            <div className="link-column">
              <h3>이용약관</h3>
              <ul>
                <li>이전 이용약관</li>
                <li>카카오 유료서비스 이용약관</li>
                <li>카카오 개인정보 처리방침</li>
                <li>청소년 보호정책</li>
                <li>운영정책</li>
              </ul>
            </div>
            <div className="link-column">
              <h3>브런치스토리텔링 광고사업부</h3>
              <ul>
                <li>광식 카카오톡 채널</li>
                <li>광식 인스타그램</li>
                <li>광식 페이스북</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© Kakao Corp.</p>
        <ul className="app-links">
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.daumkakao.android.brunchapp"
              className="link-info"
            >
              <span className="ico-brunch ico-android">
                안드로이드 앱 다운로드
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://apps.apple.com/kr/app/%EB%B8%8C%EB%9F%B0%EC%B9%98%EC%8A%A4%ED%86%A0%EB%A6%AC-%EC%A2%8B%EC%9D%80-%EA%B8%80%EA%B3%BC-%EC%9E%91%EA%B0%80%EB%A5%BC-%EB%A7%8C%EB%82%98%EB%B3%B4%EC%84%B8%EC%9A%94/id1001388574"
              className="link-info"
            >
              <span className="ico-brunch ico-apple">애플 앱 다운로드</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
