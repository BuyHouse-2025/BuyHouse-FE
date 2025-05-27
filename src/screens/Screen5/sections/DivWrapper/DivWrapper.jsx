import React from "react";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="item-3">
        <div className="frame-8">
          <div className="heading-3">통화량(M2)</div>

          <div className="text-wrapper-10">전월대비</div>

          <div className="frame-9">
            <div className="text-wrapper-11">-0.1</div>

            <div className="text-wrapper-12">%</div>
          </div>

          <div className="frame-10">
            <div className="text-wrapper-13">전년동월대비</div>

            <div className="text-wrapper-14">6.1%</div>
          </div>

          <div className="text-wrapper-15">2025.03</div>
        </div>
      </div>

      <img className="image-2" alt="Image" src="src\assets\스크린샷 2025-05-27 112507.png" />
    </div>
  );
};
