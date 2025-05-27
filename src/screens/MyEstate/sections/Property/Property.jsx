import React, { useState } from "react";
import "./style.css";
import { BackgroundBorder } from "../../../../components/BackgroundBorder";

// ✅ 날짜 포맷 (예: 2024-06-01 → 2024.06.01)
const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};

// ✅ 금액 포맷 (예: 42000000 → +₩42,000,000)

export const Property = ({ name, dealType, price, area, date, gain, gainRate, aptSeq }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [tradeMode, setTradeMode] = useState("one"); // 구매 상태부터 시작

  const handleOpenOverlay = () => {
    setShowOverlay(true);
    setTimeout(() => setOverlayActive(true), 10); // slide-in용
  };

  const handleCloseOverlay = () => {
    setOverlayActive(false);
    setTimeout(() => setShowOverlay(false), 300); // slide-out 후 제거
  };
  return (
    <div className="property-card">
      <div className="top">
        <div className="text name">{name}</div>
        <BackgroundBorder
          divClassName="background-border-instance"
          property1="two"
          aptSeq={aptSeq}
          openOverlay={handleOpenOverlay}
          onToggle={(newMode) => setTradeMode(newMode)}
        />
      </div>

      <div className="info">
        <div className="deal-type-wrapper">
          <div className="text deal-type">{dealType}</div>
        </div>
        <div className="text price">{price}</div>
        <div className="vertical-divider" />
        <div className="text area">{area}</div>
      </div>

      <div className="date">
        <div className="label-wrapper">
          <div className="text label">구매일</div>
          <div className="text label">현재 수익</div>
        </div>
      </div>

      <div className="gain">
        <div className="text label">{formatDate(date)}</div>
        <div className="gain-wrapper">
          <div className="text amount">{`${(gain / 10000).toFixed(0)}억 ${(gain % 10000)}만`}</div>
          <div className="text rate">{gainRate}</div>
        </div>
      </div>
      {showOverlay && (
              <PurchaseOverlayPortal
                aptSeq={aptSeq}
                onClose={handleCloseOverlay}
                isActive={overlayActive}
                onToggle={(mode) => setTradeMode(mode)}
              />
      
            )}
    </div>
    
  );
};
