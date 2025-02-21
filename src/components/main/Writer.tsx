import React, { useState } from "react";
import "../../styles/writer.scss";
import { writers } from "../../data/writers";
import { WriterCategory } from "../../types/writer";

function Writer() {
  const [activeCategory, setActiveCategory] = useState<WriterCategory>("취미");

  const getFilteredWriters = () => {
    return writers.filter((writer) => writer.category === activeCategory);
  };

  return (
    <div className="brunch-writer">
      <h2 className="screen-out">브런치 추천 작가 영역</h2>
      <h3 className="txt-brunch tit-brunch">
        B R U N C H &nbsp; W R I T E R S
      </h3>
      <p className="desc-brunch">
        <span className="txt-brunch">브런치 추천 작가</span>
      </p>
      <div className="writer-category">
        <button
          className={`category-btn ${
            activeCategory === "취미" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("취미")}
        >
          취미
        </button>
        <button
          className={`category-btn ${
            activeCategory === "사진" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("사진")}
        >
          사진
        </button>
        <button
          className={`category-btn ${
            activeCategory === "스타트업" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("스타트업")}
        >
          스타트업
        </button>
      </div>
      <div className="writer-grid">
        {getFilteredWriters().map((writer) => (
          <div key={writer.id} className="writer-card">
            <div className="writer-profile">
              <div
                className="profile-image"
                style={{ backgroundColor: writer.profileImage }}
              />
              <h4 className="writer-name">{writer.name}</h4>
              <p className="writer-description">{writer.description}</p>
              <p className="writer-subDescription">{writer.subDescription}</p>
            </div>
            <div className="writer-actions">
              <button className="action-btn">취미</button>
              <button className="action-btn">글보기</button>
              <button className="more-btn">
                <span className="more">...</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <a href="https://brunch.co.kr/publish" className="link-application">
        <img
          src="//t1.daumcdn.net/section/oc/e0d9e92ea70941b9a4861c128751fc48"
          alt="브런치 배너 이미지"
          className="img-application"
        />
      </a>
    </div>
  );
}

export default Writer;
