import banner from "../../images/banner.png";
import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <img src={banner} alt="banner" className="w-lg"></img>
      </div>
    </>
  );
};

export default Header;
