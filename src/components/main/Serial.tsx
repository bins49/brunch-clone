import "../../styles/serial.scss";
import React from "react";
import ArticleFrames from "./ArticleFrames";

function Serial() {
  return (
    <>
      <div className="animation-up-late">
        <div className="section-cont cont-serials">
          <h3 className="tit-brunch">요일별 연재</h3>
          <p className="desc-brunch">브런치북 오리지널 연재를 만나 보세요.</p>
          <div className="tab-basic tab-week">
            <strong className="screen-out">요일별 연재 목록</strong>
            <ul className="list-tab" role="tablist">
              <li role="tab">
                <a
                  className="link-tab"
                  aria-label="월"
                  href="https://brunch.co.kr/#mon#PUBLISH_TIME"
                >
                  월
                </a>
              </li>
              <li role="tab">
                <a
                  className="link-tab"
                  aria-label="화"
                  href="https://brunch.co.kr/#mon#PUBLISH_TIME"
                >
                  화
                </a>
              </li>
              <li role="tab">
                <a
                  className="link-tab"
                  aria-label="수"
                  href="https://brunch.co.kr/#mon#PUBLISH_TIME"
                >
                  수
                </a>
              </li>
              <li role="tab">
                <a
                  className="link-tab"
                  aria-label="목"
                  href="https://brunch.co.kr/#mon#PUBLISH_TIME"
                >
                  목
                </a>
              </li>
              <li role="tab">
                <a
                  className="link-tab"
                  aria-label="금"
                  href="https://brunch.co.kr/#mon#PUBLISH_TIME"
                >
                  금
                </a>
              </li>
              <li role="tab">
                <a
                  className="link-tab"
                  aria-label="월"
                  href="https://brunch.co.kr/#mon#PUBLISH_TIME"
                >
                  토
                </a>
              </li>
              <li role="tab">
                <a
                  className="link-tab"
                  aria-label="일"
                  href="https://brunch.co.kr/#mon#PUBLISH_TIME"
                >
                  일
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ArticleFrames />
    </>
  );
}

export default Serial;
