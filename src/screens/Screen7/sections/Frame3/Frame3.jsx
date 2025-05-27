import React from "react";
import "./style.css";

export const Frame3 = ({ aptDetail }) => {
  if (!aptDetail || !Array.isArray(aptDetail.deals)) return null;
  // 최대 10개만 보여주기 위해 slice
  const displayDeals = aptDetail.deals.slice(0, 10);

  // 날짜 포맷 헬퍼
  const formatDate = ({ dealYear, dealMonth, dealDay }) =>
    `${String(dealYear).slice(-2)}.` + `${String(dealMonth).padStart(2, "0")}.` + `${String(dealDay).padStart(2, "0")}`;

  return (
    <div className="frame-3">
      {/* 날짜 열 */}
      <div className="frame-28">
        <div className="horizontal-border">
          <div className="text-wrapper-39">날짜</div>
        </div>
        {displayDeals.map((deal, i) => (
          <div className="horizontal-border" key={`date-${i}`}>
            <div className="text-wrapper-40">{formatDate(deal)}</div>
          </div>
        ))}
      </div>

      {/* 실거래가 열 */}
      <div className="frame-29">
        <div className="horizontal-border">
          <div className="text-wrapper-42">실거래가</div>
        </div>
        {displayDeals.map((deal, i) => (
          <div className="horizontal-border" key={`price-${i}`}>
            <div className="text-wrapper-43">{(deal.dealAmount / 10000).toFixed(0)}억 {(deal.dealAmount % 10000)}만</div>
          </div>
        ))}
      </div>

      {/* 평형 열 */}
      <div className="frame-28">
        <div className="horizontal-border">
          <div className="text-wrapper-39">평형</div>
        </div>
        {displayDeals.map((deal, i) => (
          <div className="horizontal-border" key={`area-${i}`}>
            <div className="text-wrapper-45">{Math.round(deal.excluUseAr / 3.3)} 평</div>
          </div>
        ))}
      </div>

      {/* 위치 열 */}
      <div className="frame-30">
        <div className="horizontal-border">
          <div className="text-wrapper-39">위치</div>
        </div>
        {displayDeals.map((deal, i) => (
          <div className="horizontal-border" key={`loc-${i}`}>
            <div className="text-wrapper-46"> {deal.floor}층</div>
          </div>
        ))}
      </div>
    </div>
  );
};
