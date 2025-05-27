import React from "react";
import "./style.css";

export const UserInfo = ({ name, totalAsset }) => {
  return (
    <div className="user-info">
      <div className="userframe">
        <div className="usertext-wrapper">{name} 님의</div>
        <div className="userdiv">보유한 아파트 자산은?</div>
      </div>
      <div className="usertext-wrapper-2">{`${(totalAsset / 10000).toFixed(0)}억 ${(totalAsset % 10000)}만`}</div>
    </div>
  );
};
