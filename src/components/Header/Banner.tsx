import React, { useState, useEffect } from "react";
import "../../styles/banner.scss";
import * as Images from "../../types/index";

const Banner = () => {
  const [VisibleBanner, setVisibleBanner] = useState<string>("0px");

  const closeBanner = () => {
    setVisibleBanner("-480px");
  };

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      // 현재 wheel이 올라갔는지 파악하기 위해 deltaY 사용
      if (window.scrollY === 0 && e.deltaY < 0) {
        setVisibleBanner("0px");
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <>
      <div className="wrap-banner" style={{ marginTop: VisibleBanner }}>
        <div className="image-container">
          <img src={Images.banner} alt="banner" className="image" />
          <img
            src={Images.bannertext}
            alt="bannertext"
            className="image-text"
          />
          <button className="close-button" onClick={closeBanner}>
            <img src={Images.cancel} alt="cancel" className="close-button" />
          </button>
        </div>
      </div>
      <div className="small-image-container">
        <a
          href="https://brunch.co.kr/@brunch/370?t_src=brunch_pc_topbanner"
          target="_blank"
          // 출발지 URL 페이지 전달 방지 + 새 창이 원본 페이지의 JS 통해 부모 페이지 접근 불가
          rel="noopener noreferrer"
        >
          <img
            src={Images.smallbanner}
            alt="smallbanner"
            className="small-banner"
          />
          <img
            src={Images.smallbannertext}
            alt="smallbannertext"
            className="small-banner-text"
          />
        </a>
      </div>
    </>
  );
};

export default Banner;
