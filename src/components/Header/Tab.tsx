import React, { useEffect, useState } from "react";
import "../../styles/tab.scss";
import * as Images from "../../assets";

function Tab() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector(".banner") as HTMLElement;
      const bannerHeight = banner?.offsetHeight || 0;
      setIsSticky(window.scrollY > bannerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="left-section">
        <button className="hamburger-button">
          <img src={Images.hamburger} alt="hamburger" className="hamburger" />
        </button>
        <p className="title">
          brunch<span className="story">story</span>
        </p>
      </div>
      <div className="right-section">
        <button className="button">시작하기</button>
        <button className="search-button">
          <img src={Images.search} alt="search" className="search" />
        </button>
      </div>
    </header>
  );
}

export default Tab;
