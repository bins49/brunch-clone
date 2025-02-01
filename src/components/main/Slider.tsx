import React, { useState } from "react";
import "../../styles/slider.scss";

function Slider() {
  //현재 페이지 상태 관리
  const [currentPage, setCurrentPage] = useState<number | null>(null);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="wrap-paging">
      {[...Array(10)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className="link-page"
            onClick={() => handleClick(pageNumber)}
          >
            <span className={`img-page text-page${pageNumber}`}>
              {pageNumber}
            </span>
            {currentPage === pageNumber && (
              <span className="screen-out">현재페이지</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default Slider;
