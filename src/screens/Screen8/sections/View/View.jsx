import React from "react";
import { PropertyDefaultWrapper } from "../../../../components/PropertyDefaultWrapper";
import "./style.css";

export const View = ({
  dongData,
  selectedSido,
  setSelectedSido,
  selectedGugun,
  setSelectedGugun,
  selectedDong,
  setSelectedDong,
}) => {
  const sidoList = [...new Set(dongData.map((d) => d.sido))];
  const gugunList = [...new Set(dongData.filter((d) => d.sido === selectedSido).map((d) => d.gugun))];
  const dongList = dongData
    .filter((d) => d.sido === selectedSido && d.gugun === selectedGugun)
    .map((d) => d.dong);

  return (
    <div className="view">
      {/* 시도 선택 */}
      <div className="vertical-border">
        <div className="frame-34">
          {sidoList.map((sido) => (
            <PropertyDefaultWrapper
              key={`sido-${sido}`}
              buttontext={sido.replace("특별시", "").replace("광역시", "").replace("도", "")}
              isSelected={selectedSido === sido}
              onClick={() => {
                setSelectedSido(sido);
                setSelectedGugun("");
                setSelectedDong("");
              }}
            />
          ))}
        </div>
      </div>

      {/* 구/군 선택 */}
      <div className="vertical-border-2">
        <div className="frame-35">
          {gugunList.map((gugun) => (
            <PropertyDefaultWrapper
              key={`gugun-${selectedSido}-${gugun}`} // ✅ 시도 + 구군으로 고유하게
              buttontext={gugun}
              isSelected={selectedGugun === gugun}
              onClick={() => {
                setSelectedGugun(gugun);
                setSelectedDong("");
              }}
            />
          ))}
        </div>
      </div>

      {/* 동 선택 */}
      <div className="vertical-border-2">
        <div className="frame-36">
          {dongList.map((dong) => (
            <PropertyDefaultWrapper
              key={`dong-${selectedSido}-${selectedGugun}-${dong}`} // ✅ 시도 + 구군 + 동으로 고유하게
              buttontext={dong}
              isSelected={selectedDong === dong}
              onClick={() => setSelectedDong(dong)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
