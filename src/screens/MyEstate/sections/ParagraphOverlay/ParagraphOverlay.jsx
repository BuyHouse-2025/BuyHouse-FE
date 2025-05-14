import React from "react";
import "./style.css";

export const ParagraphOverlay = () => {
  return (
    <div className="paragraph-overlay">
      <div className="price-all">
        <div className="text-wrapper-3">총 취득가격</div>

        <div className="text-wrapper-4">30.6억</div>

        <div className="text-wrapper-5">2개보유</div>
      </div>

      <div className="price-now">
        <div className="text-wrapper-3">현재 평가가격</div>

        <div className="text-wrapper-4">37.4억</div>

        <div className="text-wrapper-6">+6.8억/+22.17%</div>
      </div>
    </div>
  );
};
