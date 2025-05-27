import React from "react";
import "./style.css";

export const Frame2 = ({ aptDetail, onClose }) => {
  return (
    <div className="frame-2">
      <div className="container">
        <div className="text-wrapper-34">단지 정보</div>
      </div>

      <div className="frame-21">
        <div className="container-2">
          <div className="text-wrapper-35">단지 주소</div>
        </div>

        <div className="container-3">
          <div className="text-wrapper-36">
            {aptDetail.umdNm} {aptDetail.jibun} {aptDetail.roadNm} {aptDetail.roadNmBonbun} {aptDetail.roadNmBubun}
          </div>
        </div>
      </div>

      <div className="frame-22">
        <div className="frame-23">
          <div className="container-4">
            <div className="text-wrapper-35">준공일</div>
          </div>

          <div className="container-5">
            <div className="text-wrapper-36">{aptDetail.buildYear}</div>
          </div>
        </div>

        <div className="frame-24">
          <div className="container-2">
            <div className="text-wrapper-37">용적률 (건폐율)</div>
          </div>

          <div className="container-6">
            <div className="text-wrapper-36">{aptDetail.floorAreaRatio}</div>
          </div>
        </div>
      </div>

      <div className="frame-25">
        <div className="frame-26">
          <div className="container-7">
            <div className="text-wrapper-38">{aptDetail.floorAreaRatio}</div>
          </div>

          <div className="container-8">
            <div className="text-wrapper-36">298세대</div>
          </div>
        </div>

        <div className="frame-27">
          <div className="container-9">
            <div className="text-wrapper-35">시공사</div>
          </div>

          <div className="container-10">
            <div className="text-wrapper-36">(주)중앙건설</div>
          </div>
        </div>
      </div>
    </div>
  );
};
