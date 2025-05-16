import React, { useState } from "react";
import { PropertyDefaultWrapper } from "../../../../components/PropertyDefaultWrapper";
import "./style.css";
import dongData from "../../../../assets/dong_coords.json"; // 경로에 맞게 수정


export const View = ({
  selectedDistrict,
  setSelectedDistrict,
  selectedNeighborhood,
  setSelectedNeighborhood,
}) => {

  const districts = [...new Set(dongData.map((d) => d.gu))]; // 모든 구 추출
  const neighborhoods = dongData
    .filter((d) => d.gu === selectedDistrict)
    .map((d) => d.dong);

  return (
    <div className="view">
      <div className="vertical-border">
        <div className="background-2">
          <div className="text-wrapper-58">서울</div>
        </div>
      </div>

      <div className="vertical-border-2">
        <div className="frame-35">
          {districts.map((district) => (
            <PropertyDefaultWrapper
              key={district}
              buttontext={district}
              isSelected={selectedDistrict === district}
              onClick={() => setSelectedDistrict(district)}
            />
          ))}
        </div>
      </div>

      <div className="vertical-border-2">
        <div className="frame-36">
          {neighborhoods.map((neighborhood) => (
            <PropertyDefaultWrapper
              key={neighborhood}
              buttontext={neighborhood}
              isSelected={selectedNeighborhood === neighborhood}
              onClick={() => setSelectedNeighborhood(neighborhood)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};