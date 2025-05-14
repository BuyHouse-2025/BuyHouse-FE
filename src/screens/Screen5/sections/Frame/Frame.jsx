import React from "react";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="item">
        <div className="div-2">
          <div className="heading">경상수지</div>

          <div className="div-3">
            <div className="text-wrapper">71.8</div>

            <div className="text-wrapper-2">억$</div>
          </div>

          <div className="text-wrapper-3">2025.02</div>
        </div>
      </div>

      <img
        className="image"
        alt="Image"
        src="https://c.animaapp.com/JuAZje8Q/img/image-11@2x.png"
      />
    </div>
  );
};
