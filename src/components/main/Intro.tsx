import "../../styles/intro.scss";
import React, { useState, useEffect } from "react";
import * as Images from "../../types";

// 메인 타이틀 및 슬라이더
function Intro() {
  const [VisibleText, setVisibleText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleText((prevText) => (prevText === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="intro_brunch">
        <h3 className="tit-brunch">
          작품이 되는 이야기, 브런치스토리
          <img
            src={Images.brunch}
            className="brunch-icon"
            alt="brunch-icon"
          ></img>
        </h3>
        <p className="desc-brunch">
          <span className="part">
            브런치스토리에 담긴 아름다운 작품을 감상해 보세요.
            <br />
          </span>
          <span className="part">그리고 다시 꺼내 보세요.</span>
          <br />
          <span className="part">서랍 속 간직하고 있는 글과 감성을.</span>
        </p>
      </div>
      <ul className="notice-wrap">
        <li
          className={`notice-item ${VisibleText === 0 ? "visible" : "hidden"}`}
        >
          <a
            href="https://brunch.co.kr/@brunch/370"
            target="_blank"
            rel="noreferrer"
          >
            <span className="info-notice">
              '브런치 작가 멤버십' 파일럿 오픈 소식 및 이용안내
            </span>
            <span className="ico-notice">notice</span>
          </a>
        </li>
        <li
          className={`notice-item ${VisibleText === 1 ? "visible" : "hidden"}`}
        >
          <a
            href="https://brunch.co.kr/@brunch/343"
            target="_blank"
            rel="noreferrer"
          >
            <span className="info-notice">
              2024 새로운 작가의 탄생을 축하해 주세요!
            </span>
            <span className="ico-notice">notice</span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Intro;
