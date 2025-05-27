import React from "react";
import "./style.css";

export const ParagraphOverlay = ({ totalOwned, totalCurrent, totalDiff, rate, count }) => {
  return (
    <div className="paragraph-overlay">
      <div className="price-all">
        <div className="text-wrapper-3">총 취득가격</div>
        <div className="text-wrapper-4">{`${(totalOwned / 10000).toFixed(0)}억 ${(totalOwned % 10000)}만`}</div>
        <div className="text-wrapper-5">{count}개보유</div>
      </div>
      <div className="price-now">
        <div className="text-wrapper-3">현재 평가가격</div>
        <div className="text-wrapper-4">{`${(totalCurrent / 10000).toFixed(0)}억 ${(totalCurrent % 10000)}만`}</div>
        <div className="text-wrapper-6">
          {(totalDiff >= 0 ? "+" : "") +
            `${(totalDiff / 10000).toFixed(1)}억    ` + 
            `${(rate ?? 0).toFixed(2)}%`}
        </div>
      </div>
    </div>
  );
};

function formatKoreanCurrency(value) {
  if (value >= 1_0000_0000) {
    return `${Math.floor(value / 1_0000_0000)}억 ${(Math.floor(value % 1_0000_0000 / 10000))}만원`;
  } else if (value >= 10000) {
    return `${Math.floor(value / 10000)}만원`;
  } else {
    return `${value}원`;
  }
}