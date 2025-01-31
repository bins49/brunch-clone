import React from "react";
import "../../styles/banner.scss";
import * as Images from "../../images";

const Banner = () => {
  return (
    <>
      <div className="Image-container">
        <img src={Images.banner} alt="banner" className="Image" />
        <img src={Images.bannertext} alt="bannertext" className="Image-text" />
        <button className="Close-button">
          <img src={Images.cancel} alt="cancel" className="Close-button" />
        </button>
      </div>
      <div className="Small-image-container">
        <a
          href="https://brunch.co.kr/@brunch/370?t_src=brunch_pc_topbanner"
          target="_blank"
          // 출발지 URL 페이지 전달 방지 + 새 창이 원본 페이지의 JS 통해 부모 페이지 접근 불가
          rel="noopener noreferrer"
        >
          <img
            src={Images.smallbanner}
            alt="smallbanner"
            className="Small-banner"
          />
          <img
            src={Images.smallbannertext}
            alt="smallbannertext"
            className="Small-banner-text"
          />
        </a>
      </div>
    </>
  );
};

export default Banner;
