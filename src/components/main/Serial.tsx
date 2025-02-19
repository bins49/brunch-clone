import "../../styles/serial.scss";
import React, { useState } from "react";
import ArticleFrames from "./ArticleFrames";

function Serial() {
  const [activeDay, setActiveDay] = useState("월");

  return (
    <>
      <div className="animation-up-late">
        <div className="section-cont cont-serials">
          <h3 className="tit-brunch">요일별 연재</h3>
          <p className="desc-brunch">브런치북 오리지널 연재를 만나 보세요.</p>
          <div className="tab-basic tab-week">
            <strong className="screen-out">요일별 연재 목록</strong>
            <ul className="list-tab" role="tablist">
              {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
                <li key={day} role="tab">
                  <a
                    className={`link-tab ${activeDay === day ? "active" : ""}`}
                    aria-label={day}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveDay(day);
                    }}
                  >
                    {day}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ArticleFrames activeDay={activeDay} />
    </>
  );
}

export default Serial;
