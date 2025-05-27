import React from "react";
import "./style.css";


export const Card = ({ aptSeq, aptNm, buildYear, roadName, roadNmBonbun, onClick }) => {
  return (

    <div className="search-card" onClick={onClick}>
      <div className="top">
        <div className="text name">{aptNm}</div>
      </div>
      <div className="infos">
        <div className="info">준공년도: {buildYear}</div>
        <div className="info">도로명: {roadName} {roadNmBonbun}</div>
      </div>
    </div>
  );
};
