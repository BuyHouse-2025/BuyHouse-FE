import React, { useState } from "react";
import { Background1 } from "./sections/Background1";
import { Screen } from "../Screen";
import { Nav } from "./sections/Nav";
import { Section } from "./sections/Section";
import { MyEstateOverlayPortal } from "./sections/portals/MyEstateOverlayPortal";
import { FavoriteOverlayPortal } from "./sections/portals/FavoriteOverlayPortal";

import { UpdateMemberInfoOverlayPortal } from "./sections/portals/UpdateMemberInfoOverlayPortal";
import { UpdatePwdOverlayPortal } from "./sections/portals/UpdatePwdOverlayPortal";

import "./style.css";

export const Screen9 = () => {
  // MyEstate Overlay
  const [showMyEstateOverlay, setShowMyEstateOverlay] = useState(false);
  const [myEstateActive, setMyEstateActive] = useState(false);
  const openMyEstate = () => {
    setShowMyEstateOverlay(true);
    setTimeout(() => setMyEstateActive(true), 10);
  };
  const closeMyEstate = () => {
    setMyEstateActive(false);
    setTimeout(() => setShowMyEstateOverlay(false), 300);
  };

  // Favorite Overlay
  const [showFavoriteOverlay, setShowFavoriteOverlay] = useState(false);
  const [favoriteActive, setFavoriteActive] = useState(false);
  const openFavorite = () => {
    setShowFavoriteOverlay(true);
    setTimeout(() => setFavoriteActive(true), 10);
  };
  const closeFavorite = () => {
    setFavoriteActive(false);
    setTimeout(() => setShowFavoriteOverlay(false), 300);
  };

  // UpdateMemberInfo Overlay
  const [showUpdateMemberInfoOverlay, setShowUpdateMemberInfoOverlay] = useState(false);
  const [updateMemberInfoActive, setUpdateMemberInfoActive] = useState(false);
  const openUpdateMemberInfo = () => {
    setShowUpdateMemberInfoOverlay(true);
    setTimeout(() => setUpdateMemberInfoActive(true), 10);
  };
  const closeUpdateMemberInfo = () => {
    setUpdateMemberInfoActive(false);
    setTimeout(() => setShowUpdateMemberInfoOverlay(false), 300);
  };

  // UpdatePwd Overlay
  const [showUpdatePwdOverlay, setShowUpdatePwdOverlay] = useState(false);
  const [updatePwdActive, setUpdatePwdActive] = useState(false);
  const openUpdatePwd = () => {
    setShowUpdatePwdOverlay(true);
    setTimeout(() => setUpdatePwdActive(true), 10);
  };
  const closeUpdatePwd = () => {
    setUpdatePwdActive(false);
    setTimeout(() => setShowUpdatePwdOverlay(false), 300);
  };

  // 외부 클릭 시 닫기
  const handleClickOutside = (e, closeFn) => {
    if (e.target.classList.contains("overlay-full")) {
      closeFn();
    }
  };

  return (
    <div className="screen-9" data-model-id="1:1009">
      <div className="view-11">
        <div className="background-15" />
      </div>

      <div className="view-12">
        <Background1 onOpenUpdateMemberInfo={openUpdateMemberInfo} onOpenUpdatePwd={openUpdatePwd} />
        <div className="overlay-4" />

        {/* Nav에 전달하는 Prop 이름을 바꿨습니다. */}
        <Nav onOpenFavorite={openFavorite} onOpenOwned={openMyEstate} />

        <Section />

        <div className="text-wrapper-127">회원탈퇴</div>
      </div>

      {showMyEstateOverlay && (
        <MyEstateOverlayPortal
          onClose={(e) => handleClickOutside(e, closeMyEstate)}
          closeMyEstate={closeMyEstate}
          isActive={myEstateActive}
        />
      )}

      {showFavoriteOverlay && (
        <FavoriteOverlayPortal
          onClose={(e) => handleClickOutside(e, closeFavorite)}
          closeFavorite={closeFavorite}
          isActive={favoriteActive}
        />
      )}

      {showUpdateMemberInfoOverlay && (
        <UpdateMemberInfoOverlayPortal
          onClose={(e) => handleClickOutside(e, closeUpdateMemberInfo)}
          isActive={updateMemberInfoActive}
        />
      )}

      {showUpdatePwdOverlay && (
        <UpdatePwdOverlayPortal onClose={(e) => handleClickOutside(e, closeUpdatePwd)} isActive={updatePwdActive} />
      )}
    </div>
  );
};
