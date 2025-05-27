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
            <div className="text-wrapper-5">-0.1</div>

            <div className="text-wrapper-6">%</div>
          </div>

          <div className="frame-7">
            <div className="text-wrapper-7">전년동월대비</div>

            <div className="text-wrapper-8">0.9%</div>
          </div>

          <div className="text-wrapper-9">2025.04</div>
        </div>
      </div>

      <img className="img" alt="Image" src="src\assets\스크린샷 2025-05-27 112443.png" />
    </div>
  );
};
