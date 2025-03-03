import React, { useEffect, useState } from "react";
import "../../styles/tab.scss";
import * as Images from "../../types";
import SideMenu from "./SideMenu";
import SearchPage from "../Search/SearchPage";
import StartModal from "../Modal/StartModal";

function Tab() {
  const [isSticky, setIsSticky] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector(".banner") as HTMLElement;
      const bannerHeight = banner?.offsetHeight || 0;
      setIsSticky(window.scrollY > bannerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const handleStartModalOpen = () => {
    setIsStartModalOpen(true);
  };

  const handleStartModalClose = () => {
    setIsStartModalOpen(false);
  };

  return (
    <>
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="left-section">
          <button
            className="hamburger-button"
            onClick={() => setIsSideMenuOpen(true)}
          >
            <img src={Images.hamburger} alt="hamburger" className="hamburger" />
          </button>
          <p className="title">
            brunch<span className="story">story</span>
          </p>
        </div>
        <div className="right-section">
          <button className="button" onClick={handleStartModalOpen}>
            시작하기
          </button>
          <button className="search-button" onClick={handleSearchClick}>
            <img src={Images.search} alt="search" className="search" />
          </button>
        </div>
      </header>
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />
      {isSearchOpen && <SearchPage onClose={handleSearchClose} />}
      <StartModal isOpen={isStartModalOpen} onClose={handleStartModalClose} />
    </>
  );
}

export default Tab;
