"use client"

import { View } from "./sections/View"
import "./style.css"

export const Screen8 = ({
  dongData,
  selectedSido,
  setSelectedSido,
  selectedGugun,
  setSelectedGugun,
  selectedDong,
  setSelectedDong,
  selectedDongcode,
  setSelectedDongcode,
  onMoveToLocation
}) => {
  const handleMoveToLocation = () => {
    const location = dongData.find(
      (d) =>
        d.sido === selectedSido &&
        d.gugun === selectedGugun &&
        d.dong === selectedDong
    );

    if (location) {
      onMoveToLocation({
        lat: location.lat,
        lng: location.lng,
        sido: selectedSido,
        district: selectedGugun,
        neighborhood: selectedDong,
      });
    } else {
      alert("해당 지역의 좌표를 찾을 수 없습니다.");
    }
  };

  return (
    <div className="screen-8">
      <div className="overlap-group-5">
        <div className="background-14">
          <View
            dongData={dongData}
            selectedSido={selectedSido}
            setSelectedSido={setSelectedSido}
            selectedGugun={selectedGugun}
            setSelectedGugun={setSelectedGugun}
            selectedDong={selectedDong}
            setSelectedDong={setSelectedDong}
            selectedDongcode={selectedDongcode}
            setSelectedDongcode={setSelectedDongcode}
          />
          
          <button className="view-10" onClick={handleMoveToLocation}>
              <div className="movebtn">{selectedDong}으로 이동</div>
          </button>
          
        </div>
      </div>
    </div>
  );
};
