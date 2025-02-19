import React, { useState } from "react";
import "../../styles/articleFrames.scss";
import { articles } from "../../data/articles";
import { Article, Category } from "../../types/article";

interface ArticleFramesProps {
  activeDay: string;
}

function ArticleFrames({ activeDay }: ArticleFramesProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("latest");

  const getFilteredArticles = () => {
    const dayFiltered = articles.filter(
      (article: Article) => article.day === activeDay
    );

    // 최신순,응원순, 라이킷순 정렬
    return dayFiltered.sort((a, b) => {
      if (activeCategory === "latest") {
        const dateA = a.publishedAt ? new Date(a.publishedAt) : new Date(0);
        const dateB = b.publishedAt ? new Date(b.publishedAt) : new Date(0);
        return dateB.getTime() - dateA.getTime();
      }
      if (activeCategory === "support") {
        return (b.supportCount || 0) - (a.supportCount || 0);
      }
      return (b.likeitCount || 0) - (a.likeitCount || 0);
    });
  };

  return (
    <div className="article-frames">
      <div className="frames-header">
        <div className="category-buttons">
          <button
            className={`category-btn ${
              activeCategory === "latest" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("latest")}
          >
            <span className="dot">•</span>
            최신순
          </button>
          <button
            className={`category-btn ${
              activeCategory === "support" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("support")}
          >
            <span className="dot">•</span>
            응원순
          </button>
          <button
            className={`category-btn ${
              activeCategory === "likeit" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("likeit")}
          >
            <span className="dot">•</span>
            라이킷순
          </button>
        </div>
      </div>
      <div className="frames-grid">
        {getFilteredArticles().map((article) => (
          <div key={article.id} className="article-frame">
            {article.image && (
              <div
                className="frame-image"
                style={{ backgroundImage: `url(${article.image})` }}
              />
            )}
            <div className="frame-content">
              <div className="title-wrapper">
                <h3 className="frame-title">{article.title}</h3>
                {article.isNew && <span className="new-badge">N</span>}
              </div>
              <p className="frame-subtitle">{article.subtitle}</p>
              <p className="frame-author">{article.author}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more">
        <a
          href="https://brunch.co.kr/serial/list#fri#DONATION_TOTAL_AMOUNT"
          className="view-more-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          연재 작품 전체 보기
        </a>
      </div>
    </div>
  );
}

export default ArticleFrames;
