import { View } from "./sections/View";
import "./style.css";

export const Screen8 = ({
  selectedDistrict,
  setSelectedDistrict,
  selectedNeighborhood,
  setSelectedNeighborhood,
}) => {
  return (
    <div className="screen-8">
      <div className="overlap-group-5">
        <div className="background-14">
          <View
            selectedDistrict={selectedDistrict}
            setSelectedDistrict={setSelectedDistrict}
            selectedNeighborhood={selectedNeighborhood}
            setSelectedNeighborhood={setSelectedNeighborhood}
          />
          <div className="view-10">
            <div className="text-wrapper-126">
              {selectedNeighborhood}으로 이동
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
