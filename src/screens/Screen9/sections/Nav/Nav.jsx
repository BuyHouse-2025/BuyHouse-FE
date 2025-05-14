import React from "react";
import "./style.css";

export const Nav = ({ onOpenFavorite, onOpenOwned }) => {
  return (
    <div className="nav">
      <div className="container-19">
        <div className="text-wrapper-68">나의 부동산</div>
      </div>

      <div className="frame-45">
        <div className="frame-46" onClick={onOpenFavorite}>
          <div className="img-wrapper">
            <img className="img-2" alt="Heart" src="https://c.animaapp.com/JuAZje8Q/img/heart-1@2x.png" />
          </div>
          <div className="text-wrapper-69">찜 목록</div>
        </div>

        <div className="frame-46" onClick={onOpenOwned}>
          <div className="img-wrapper">
            <img className="img-2" alt="House" src="https://c.animaapp.com/JuAZje8Q/img/house-1@2x.png" />
          </div>
          <div className="text-wrapper-70">보유 부동산</div>
        </div>
      </div>
    </div>
  );
};
