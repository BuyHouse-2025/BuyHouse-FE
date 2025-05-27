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
  selectedDongcode,
  setSelectedDongcode,
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
                setSelectedDongcode("");
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
                setSelectedDongcode("");
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
              key={`dong-${selectedSido}-${selectedGugun}-${dong}`}
              buttontext={dong}
              isSelected={selectedDong === dong}
              onClick={() => {
                setSelectedDong(dong);

                if (dongData.length === 0) {
                  console.warn("⚠️ dongData 비어 있음!");
                  setSelectedDongcode("");
                  return;
                }

                if (!selectedSido || !selectedGugun || !dong) {
                  console.warn("❌ 선택 항목이 비어있습니다", selectedSido, selectedGugun, dong);
                  return;
                }

                const matched = dongData.find((d) => {
                  if (!d || !d.sido || !d.gugun || !d.dong) return false;
                  return (
                    d.sido.trim() === selectedSido.trim() &&
                    d.gugun.trim() === selectedGugun.trim() &&
                    d.dong.trim() === dong.trim()
                  );
                });


                if (matched && matched.dongcode) {
                  console.log("✅ 설정할 dongcode:", matched.dongcode);
                  setSelectedDongcode(matched.dongcode);
                } else {
                  console.warn("❌ dongcode 설정 실패 - matched:", matched);
                  setSelectedDongcode(""); // or null
                }

              }}

            />
          ))}
        </div>
      </div>
    </div>
  );
};
