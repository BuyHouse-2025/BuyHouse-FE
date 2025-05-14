import React from "react";
import "./style.css";

export const Div = () => {
  return (
    <div className="div">
      <div className="item-4">
        <div className="frame-11">
          <div className="heading-4">
            주택매매
            <br />
            가격지수
          </div>

          <div className="text-wrapper-16">전월대비</div>

          <div className="frame-12">
            <div className="text-wrapper-17">0.2</div>

            <div className="text-wrapper-18">%</div>
          </div>

          <div className="frame-13">
            <div className="text-wrapper-19">전년동월대비</div>

            <div className="text-wrapper-20">2.1%</div>
          </div>

          <div className="text-wrapper-21">2025.03</div>
        </div>
      </div>

      <img
        className="image-3"
        alt="Image"
        src="https://c.animaapp.com/JuAZje8Q/img/image-11-5@2x.png"
      />
    </div>
  );
};
