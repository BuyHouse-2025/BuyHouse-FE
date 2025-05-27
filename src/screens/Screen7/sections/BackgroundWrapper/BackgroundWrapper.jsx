import React, { useState } from "react";
import { BackgroundBorder } from "../../../../components/BackgroundBorder";
import { MaskGroup } from "../../../../components/MaskGroup";
import { PurchaseOverlayPortal } from "./PurchaseOverlayPortal"
import "./style.css";

export const BackgroundWrapper = ({ aptDetail, onClose, userWishList }) => {
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
    <div className="background-wrapper">
      <div className="frame-33">
        <div className="frame-34">
          <MaskGroup
            className="mask-group-instance"
            aptSeq={aptDetail.aptSeq}
            wishList={userWishList}
          />
          <div className="paragraph">
            <div className="text-wrapper-57">{aptDetail.aptNm}</div>
          </div>
        </div>

        <BackgroundBorder
          divClassName="background-border-instance"
          property1={tradeMode}
          aptSeq={aptDetail.aptSeq}
          openOverlay={handleOpenOverlay}
          onToggle={(newMode) => setTradeMode(newMode)}
        />


        <div className="sideclose-svg-fill-wrapper" onClick={onClose}>
          <img
            className="mask-group-2"
            alt="Mask group"
            src="https://c.animaapp.com/JuAZje8Q/img/mask-group-24@2x.png"
          />
        </div>
      </div>

      {showOverlay && (
        <PurchaseOverlayPortal
          aptSeq={aptDetail.aptSeq}
          onClose={handleCloseOverlay}
          isActive={overlayActive}
          onToggle={(mode) => setTradeMode(mode)}
        />

      )}
    </div>
  );
};
