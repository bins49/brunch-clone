import React, { useState } from "react";
import "../../styles/articleFrames.scss";

interface Article {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  image?: string;
  isNew?: boolean;
  supportCount?: number;
  category: "latest" | "support" | "likeit";
}

type Category = "latest" | "support" | "likeit";

function ArticleFrames() {
  const [activeCategory, setActiveCategory] = useState<Category>("latest");

  const articles: Article[] = [
    // Latest articles (최신순)
    {
      id: 1,
      title: "나 때려가 글을 써도 된다면",
      subtitle: "책장에 남겨놓은 카페",
      author: "by 김구욱",
      isNew: true,
      category: "latest",
    },
    {
      id: 2,
      title: "40대 아저씨의 마블 속 캐스터",
      subtitle: "좋죽한 삶을 살 것인가?",
      author: "by 연금술사",
      image: "/path/to/car.jpg",
      isNew: true,
      category: "latest",
    },
    {
      id: 3,
      title: "2 하나님께 드린 기도 평안 갖드길 #14",
      subtitle: "2 하나님께 드린기도 평안",
      author: "by 은혜의 단비",
      image: "/path/to/jesus.jpg",
      isNew: true,
      category: "latest",
    },
    {
      id: 4,
      title: "그대, 그대, 그리고 그대, 2",
      subtitle: "#20210329",
      author: "by 그림남",
      image: "/path/to/light.jpg",
      isNew: true,
      category: "latest",
    },
    {
      id: 5,
      title: "[에필로그] 그렇게 삶은 계속 된다",
      subtitle: "점국연 모두 사람 이야기",
      author: "by 보통PD 박다다",
      image: "/path/to/street.jpg",
      isNew: true,
      category: "latest",
    },
    {
      id: 6,
      title: "내가 육아휴직 7개월 차에 퇴사 한 이유",
      subtitle: "일절의 워킹맘, 엄마가 되다",
      author: "by 열라도 엄마",
      isNew: true,
      category: "latest",
    },
    {
      id: 7,
      title: "홍카페 걸과류 든튼 신메뉴 맛공비터요리 잘",
      subtitle: "고나 토스트",
      author: "by 제킬",
      image: "/path/to/food.jpg",
      isNew: true,
      category: "latest",
    },

    // Updated support articles (응원순)
    {
      id: 8,
      title: "책장에 남겨놓은 카페",
      subtitle: "혼술의 시간",
      author: "by 지다",
      isNew: true,
      category: "support",
    },
    {
      id: 9,
      title: "좋죽한 삶을 살 것인가?",
      subtitle: "40대 아저씨의 마블 속 캐스터",
      author: "by 연금술사",
      image: "/path/to/car.jpg",
      isNew: true,
      category: "support",
    },
    {
      id: 10,
      title: "2 하나님께 드린기도 평안",
      subtitle: "2 하나님께 드린 기도 평안 갖드길 #14",
      author: "by 은혜의 단비",
      image: "/path/to/jesus.jpg",
      isNew: true,
      category: "support",
    },
    {
      id: 11,
      title: "[에필로그] 그렇게 삶은 계속 된다",
      subtitle: "결국엔 모두 사람 이야기",
      author: "by 보통PD 박다다",
      image: "/path/to/street.jpg",
      isNew: true,
      category: "support",
    },
    {
      id: 12,
      title: "내의 담쟁생님",
      subtitle: "냉이, 한 쪽 벌로 살아야 한",
      author: "by 이보",
      image: "/path/to/chicken.jpg",
      isNew: true,
      category: "support",
    },
    {
      id: 13,
      title: "홍카페 걸과류 든튼 신메뉴",
      subtitle: "알록달록 무지개 색깔",
      author: "by 제킬",
      image: "/path/to/food.jpg",
      isNew: true,
      category: "support",
    },

    // Likeit articles (from your image)
    {
      id: 14,
      title: "적성롭다, 술",
      subtitle: "혼술의 시간",
      author: "by 지다",
      image: "/path/to/bar-image.jpg",
      category: "likeit",
    },
    {
      id: 15,
      title: "그날 밤, 아빠의 삶을 지우기로 결심했다(5)",
      subtitle: "아빠의 삶을 지우기로 결심했다",
      author: "by Josephine",
      image: "/path/to/bird-cage.jpg",
      category: "likeit",
    },
    {
      id: 16,
      title: "강릉, 바다와 함께 쉬어가는 도시",
      subtitle: "취향의 심박수",
      author: "by 이해수",
      image: "/path/to/beach-image.jpg",
      category: "likeit",
      isNew: true,
    },
    {
      id: 17,
      title: "나를 멈추는 사람",
      subtitle: "우리는 서로를 비추는 별",
      author: "by 어린 황자",
      image: "/path/to/hourglass.jpg",
      category: "likeit",
    },
    {
      id: 18,
      title: "'제1차 세계대전'-서부 전선 공방전",
      subtitle: "전쟁의 역사 2",
      author: "by 최경식",
      image: "/path/to/war-image.jpg",
      category: "likeit",
    },
    {
      id: 19,
      title: "나는 네가 빛나는 별인 줄 알았어요",
      subtitle: "매혹의 문장",
      author: "by 바다와강",
      image: "/path/to/night-image.jpg",
      category: "likeit",
      isNew: true,
    },
    {
      id: 20,
      title: "치유소설, 뽁독여사의 겨울가게 (17)",
      subtitle: "치유소설, 뽁독여사의 겨울가게",
      author: "by 뽁독여사",
      image: "/path/to/house-image.jpg",
      category: "likeit",
      isNew: true,
    },
  ];

  const getFilteredArticles = () => {
    switch (activeCategory) {
      case "latest":
        return articles
          .filter((article) => article.category === "latest")
          .sort((a, b) => b.id - a.id);
      case "support":
        return articles
          .filter((article) => article.category === "support")
          .sort((a, b) => (b.supportCount || 0) - (a.supportCount || 0));
      case "likeit":
        return articles.filter((article) => article.category === "likeit");
      default:
        return articles;
    }
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
            최신순
          </button>
          <button
            className={`category-btn ${
              activeCategory === "support" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("support")}
          >
            응원순
          </button>
          <button
            className={`category-btn ${
              activeCategory === "likeit" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("likeit")}
          >
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
