import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import StartModal from "../Modal/StartModal";
import "../../styles/sideMenu.scss";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleStartClick = () => {
    setIsModalOpen(true);
    onClose();
  };

  const handleHomeClick = () => {
    navigate("/");
    onClose();
  };

  return (
    <>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <div className="side-menu-header">
          <div className="logo-section">
            <span className="logo-service"></span>
            <p className="quote">
              You can make anything
              <br /> by writing
            </p>
            <p className="author">C.S.Lewis</p>
          </div>
          <div className="start-button-section">
            <button className="start-button active" onClick={handleStartClick}>
              브런치스토리 시작하기
            </button>
          </div>
        </div>
        <div className="side-menu-content">
          <ul className="menu-list">
            <li>
              <button
                className="active menu-title link-button"
                onClick={handleHomeClick}
              >
                브런치스토리 홈
              </button>
            </li>
            <li>
              <a href="https://brunch.co.kr/now">브런치스토리 나우</a>
            </li>
            <li>
              <a href="https://brunch.co.kr/publish">브런치스토리 책방</a>
            </li>
          </ul>
        </div>
        <div className="side-menu-bottom">
          <div className="bottom-content">
            <a href="https://brunch.co.kr/special/list">
              <img
                src="//i1.daumcdn.net/thumb/R336x0/?fname=http://t1.daumcdn.net/brunch/static/img/help/pc/top/side_banner_20221221.png"
                className="side-banner"
                alt="side-banner"
              ></img>
            </a>
          </div>
        </div>
        <a
          href="https://brunch.co.kr/signin/find_account"
          className="find-user"
        >
          계정을 잃어버리셨나요?
        </a>
      </div>
      <StartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {isOpen && <div className="overlay" onClick={onClose}></div>}
    </>
  );
};

export default SideMenu;
