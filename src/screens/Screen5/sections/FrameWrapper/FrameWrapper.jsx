import React from "react";
import "./style.css";

export const FrameWrapper = () => {
  return (
    <div className="frame-wrapper">
      <div className="item-2">
        <div className="frame-5">
          <div className="heading-2">생산자물가</div>

          <div className="text-wrapper-4">전월대비</div>

          <div className="frame-6">
            <div className="text-wrapper-5">0.0</div>

            <div className="text-wrapper-6">%</div>
          </div>

          <div className="frame-7">
            <div className="text-wrapper-7">전년동월대비</div>

            <div className="text-wrapper-8">1.3%</div>
          </div>

          <div className="text-wrapper-9">2025.03</div>
        </div>
      </div>

      <img
        className="img"
        alt="Image"
        src="https://c.animaapp.com/JuAZje8Q/img/image-11-4@2x.png"
      />
    </div>
  );
};
