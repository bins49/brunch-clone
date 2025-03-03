import React, { useState } from "react";
import { sliderData, SlideItem } from "../../data/sliderData";
import * as Images from "../../types";
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

  const gradients = {
    first: "linear-gradient(135deg, #f8f9fa 0%, #e2e8f0 100%)", // Light gray
    second: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)", // Light blue
    third: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)", // Light purple
    fourth: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)", // Light green
    fifth: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)", // Light orange
    sixth: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)", // Light pink
  };

  const getGradient = (index: number) => {
    const gradientList = Object.values(gradients);
    return gradientList[index % gradientList.length];
  };

  const renderFrame = (item: SlideItem, index: number) => (
    <div className="frame-content" style={{ background: getGradient(index) }}>
      <h3 className="frame-title">{item.title}</h3>
      <p className="frame-subtitle">{item.subtitle}</p>
      {item.description && (
        <p className="frame-description">{item.description}</p>
      )}
      <p className="frame-author">{item.author}</p>
      {item.memberCount && <p className="member-count">{item.memberCount}</p>}
    </div>
  );

  return (
    <>
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
                      renderFrame(sliderData[pageIndex * 5], 0)}
                  </div>
                </div>

                {/* Second Frame (Vertical) */}
                <div className="slide-frame vertical-frame">
                  <div className="frame frame-top">
                    {sliderData[pageIndex * 5 + 1] &&
                      renderFrame(sliderData[pageIndex * 5 + 1], 1)}
                  </div>
                  <div className="frame frame-bottom">
                    {sliderData[pageIndex * 5 + 2] &&
                      renderFrame(sliderData[pageIndex * 5 + 2], 2)}
                  </div>
                </div>

                {/* Third Frame */}
                <div className="slide-frame main-frame">
                  <div className="frame frame-large">
                    {sliderData[pageIndex * 5 + 3] &&
                      renderFrame(sliderData[pageIndex * 5 + 3], 3)}
                  </div>
                </div>

                {/* Fourth Frame (Vertical Equal) */}
                <div className="slide-frame vertical-frame-equal">
                  <div className="frame frame-half">
                    {sliderData[pageIndex * 5 + 4] &&
                      renderFrame(sliderData[pageIndex * 5 + 4], 4)}
                  </div>
                  <div className="frame frame-half">
                    {sliderData[pageIndex * 5 + 5] &&
                      renderFrame(sliderData[pageIndex * 5 + 5], 5)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {currentPage > 0 && (
            <button
              type="button"
              className="btn-prev"
              onClick={handlePrevClick}
            >
              <img
                src={Images.leftArrow}
                alt="Previous"
                className="arrow-icon"
              />
              <span className="screen-out">이전</span>
            </button>
          )}
          <button type="button" className="btn-next" onClick={handleNextClick}>
            <img src={Images.rightArrow} alt="Next" className="arrow-icon" />
            <span className="screen-out">다음</span>
          </button>
        </div>
      </div>

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
    </>
  );
}

export default Slider;
