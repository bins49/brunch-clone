import React from "react";
import "../../styles/tab.scss";
import * as Images from "../../images";

function Tab() {
  return (
    <header className="Header">
      <div className="Left-section">
        <button className="Hamburger-button">
          <img src={Images.hamburger} alt="hamburger" className="Hamburger" />
        </button>
        <p className="Title">
          brunch<span className="Story">story</span>
        </p>
      </div>
      <div className="Right-section">
        <button className="Button">시작하기</button>
        <button className="Search-button">
          <img src={Images.search} alt="search" className="Search" />
        </button>
      </div>
    </header>
  );
}

export default Tab;
