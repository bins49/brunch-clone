import React, { FC, useState } from "react";
import "../../styles/startModal.scss";
import "../../styles/startModalSlider.scss";
import KakaoLogo from "../../assets/KakaoTalk-logo.svg";

interface StartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Slide {
  title: string;
  description: string;
  image: string;
  link: string;
}

const StartModal: FC<StartModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: "브런치스토리로 제안받는 새로운 기회",
      description:
        "다양한 프로젝트와 파트너를 통해\n작가님의 작품이 책 강연 등으로 확장됩니다.",
      image:
        "https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-01.png",
      link: "https://brunch.co.kr/brunchbook/10publishers",
    },
    {
      title: "당신의 이야기를 기다립니다",
      description:
        "브런치스토리는 작가님을 기다립니다.\n당신의 이야기를 들려주세요.",
      image:
        "https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-02.png",
      link: "https://brunch.co.kr/@brunch/133",
    },
    {
      title: "브런치스토리 작가가 되어보세요",
      description: "브런치스토리와 함께\n당신의 이야기를 시작하세요.",
      image:
        "https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-03.png",
      link: "https://brunch.co.kr/@brunch/2",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="modal-left">
          <div className="start-modal-slider">
            <ul className="slide-list">
              {slides.map((slide, index) => (
                <li
                  key={index}
                  className={`slide-item ${
                    currentSlide === index ? "active" : ""
                  }`}
                >
                  <a href={slide.link} className="slide-link">
                    <div className="slide-content">
                      <img src={slide.image} alt={slide.title} />
                      <h3 className="modal-subtitle">{slide.title}</h3>
                      <p className="modal-description">{slide.description}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="slider-navigation">
              <button className="slide-nav prev" onClick={handlePrevSlide}>
                <span className="arrow-left"></span>
              </button>
              <div className="slider-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${currentSlide === index ? "active" : ""}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <button className="slide-nav next" onClick={handleNextSlide}>
                <span className="arrow-right"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="modal-right">
          <div className="login-section">
            <h2 className="modal-title">브런치스토리 시작하기</h2>
            <button className="kakao-login-btn">
              <img src={KakaoLogo} alt="Kakao" className="ico-kakao" />
              <a href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3De0201caea90cafbb237e250f63a519b5%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fbrunch.co.kr%252Fcallback%252Fauth%252Fkakao%26scope%3D%26state%3DaHR0cHM6Ly9icnVuY2guY28ua3Ivc2lnbmluL2ZpbmlzaD91cmw9JTJG%26grant_type%3Dauthorization_code%26through_account%3Dtrue#login">
                카카오계정으로 로그인
              </a>
            </button>
          </div>
          <div className="find-story-section">
            <h3 className="section-title">내 브런치스토리 찾기</h3>
            <div className="find-story-links">
              <a
                href="https://brunch.co.kr/signin/find_account"
                className="find-story-link"
              >
                내 브런치스토리의 카카오계정을 모르겠어요
              </a>
              <a
                href="https://brunch.co.kr/signin/connect_kakaoaccount"
                className="find-story-link"
              >
                페이스북·트위터로만 로그인 했었나요?
              </a>
            </div>
            <button className="help-link">
              <a href="https://cs.kakao.com/helps_html/1073194268">
                로그인 관련 상세 도움말
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartModal;
