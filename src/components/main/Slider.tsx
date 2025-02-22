import React, { useState } from "react";
import { sliderData, SlideItem } from "../../data/sliderData";
import "../../styles/slider.scss";

function Slider() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 10;

  const handlePrevClick = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePageClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const getCurrentFrameItems = () => {
    const startIndex = currentPage * 5;
    return sliderData.slice(startIndex, startIndex + 5);
  };

  const renderFrame = (item: SlideItem) => (
    <div className="frame-content">
      <img src={item.image} alt={item.title} className="frame-image" />
      <h3 className="frame-title">{item.title}</h3>
      <p className="frame-subtitle">{item.subtitle}</p>
      {item.description && (
        <p className="frame-description">{item.description}</p>
      )}
      <p className="frame-author">{item.author}</p>
      {item.memberCount && <p className="member-count">{item.memberCount}</p>}
    </div>
  );

  const currentItems = getCurrentFrameItems();

  return (
    <div className="slider-wrapper">
      <div className="editor-pic">
        <h3 className="screen-out">EDITOR PIC</h3>
        <div
          className="slides-container"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="slide-page">
              {/* First Frame */}
              <div className="slide-frame main-frame">
                <div className="frame frame-large">
                  {sliderData[pageIndex * 5] &&
                    renderFrame(sliderData[pageIndex * 5])}
                </div>
              </div>

              {/* Second Frame (Vertical) */}
              <div className="slide-frame vertical-frame">
                <div className="frame frame-top">
                  {sliderData[pageIndex * 5 + 1] &&
                    renderFrame(sliderData[pageIndex * 5 + 1])}
                </div>
                <div className="frame frame-bottom">
                  {sliderData[pageIndex * 5 + 2] &&
                    renderFrame(sliderData[pageIndex * 5 + 2])}
                </div>
              </div>

              {/* Third Frame */}
              <div className="slide-frame main-frame">
                <div className="frame frame-large">
                  {sliderData[pageIndex * 5 + 3] &&
                    renderFrame(sliderData[pageIndex * 5 + 3])}
                </div>
              </div>

              {/* Fourth Frame (Vertical Equal) */}
              <div className="slide-frame vertical-frame-equal">
                <div className="frame frame-half">
                  {sliderData[pageIndex * 5 + 4] &&
                    renderFrame(sliderData[pageIndex * 5 + 4])}
                </div>
                <div className="frame frame-half">
                  {sliderData[pageIndex * 5 + 5] &&
                    renderFrame(sliderData[pageIndex * 5 + 5])}
                </div>
              </div>
            </div>
          ))}
        </div>

        {currentPage > 0 && (
          <button type="button" className="btn_prev" onClick={handlePrevClick}>
            <span className="ico_prev"></span>
            <span className="screen-out">이전</span>
          </button>
        )}
        <button type="button" className="btn_next" onClick={handleNextClick}>
          <span className="ico_next"></span>
          <span className="screen-out">다음</span>
        </button>

        {/* Fixed 10 pages pagination */}
        <div className="pagination">
          {Array.from({ length: 10 }).map((_, index) => (
            <button
              key={index}
              className={`page-number ${currentPage === index ? "active" : ""}`}
              onClick={() => handlePageClick(index)}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
