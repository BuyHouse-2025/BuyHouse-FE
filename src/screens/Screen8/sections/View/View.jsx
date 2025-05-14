import React, { useState } from "react";
import { PropertyDefaultWrapper } from "../../../../components/PropertyDefaultWrapper";
import "./style.css";

export const View = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("강남구");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("개포동");

  const districts = [
    "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구",
    "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구",
    "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"
  ];

  const neighborhoods = [
    "개포동", "논현동", "대치동", "도곡동", "삼성동", "세곡동", "수서동",
    "신사동", "압구정동", "역삼동", "율현동", "일원동", "자곡동", "청담동"
  ];

  return (
    <div className="view">
      <div className="vertical-border">
        <div className="background-2">
          <div className="text-wrapper-58">서울</div>
        </div>
      </div>

      {/* 1단계: 구 선택 */}
      <div className="vertical-border-2">
        <div className="frame-35">
          {districts.map((district) => (
            <PropertyDefaultWrapper
              key={district}
              buttontext={district}
              isSelected={selectedDistrict === district}
              onClick={() => setSelectedDistrict(district)}
              className="background-instance"
            />
          ))}
        </div>
      </div>

      {/* 2단계: 동 선택 */}
      <div className="vertical-border-2">
        <div className="frame-36">
          {neighborhoods.map((neighborhood) => (
            <PropertyDefaultWrapper
              key={neighborhood}
              buttontext={neighborhood}
              isSelected={selectedNeighborhood === neighborhood}
              onClick={() => setSelectedNeighborhood(neighborhood)}
              className="background-instance"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
