import React, { useState } from "react";
import "../../styles/searchPage.scss";
import * as Images from "../../assets";
import SideMenu from "../Header/SideMenu";

interface SearchPageProps {
  onClose: () => void;
}

function SearchPage({ onClose }: SearchPageProps) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsSideMenuOpen(true);
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <div className="search-top">
          <div className="left-section">
            <button className="hamburger-button" onClick={handleMenuOpen}>
              <img
                src={Images.hamburger}
                alt="hamburger"
                className="hamburger"
              />
            </button>
            <p className="title">
              brunch<span className="story">story</span>
            </p>
          </div>
          <button className="close-button" onClick={onClose}>
            <span className="ico_close">×</span>
          </button>
        </div>
        <div className="search-header">
          <h3 className="screen-out">검색어를 입력해주세요</h3>
          <div className="search-input-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="검색어를 입력해주세요"
              autoFocus
            />
          </div>
          <div className="search-tags">
            <span className="tag-text">사진</span>
            <span>찍는 작가들을 소개합니다.</span>
          </div>
          <div className="tag-buttons">
            <button className="tag-button">글자이야기</button>
            <button className="tag-button">작가자료실</button>
            <button className="tag-button">브런치그래퍼</button>
          </div>
        </div>
      </div>
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />
    </div>
  );
}

export default SearchPage;
