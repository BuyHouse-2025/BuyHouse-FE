"use client"

import { View } from "./sections/View"
import dongCoords from "../../assets/dong_coords.json"
import "./style.css"

export const Screen8 = ({
  selectedDistrict,
  setSelectedDistrict,
  selectedNeighborhood,
  setSelectedNeighborhood,
  onMoveToLocation, // Add this prop to communicate with parent
}) => {
  const handleMoveToLocation = () => {
    // Find coordinates for the selected district and neighborhood
    const location = dongCoords.find((coord) => coord.gu === selectedDistrict && coord.dong === selectedNeighborhood)

    if (location && onMoveToLocation) {
      onMoveToLocation({
        lat: location.lat,
        lng: location.lng,
        district: selectedDistrict,
        neighborhood: selectedNeighborhood,
      })
    }
  }

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
          <div className="view-10" onClick={handleMoveToLocation}>
            <div className="text-wrapper-126">{selectedNeighborhood}으로 이동</div>
          </div>
        </div>
      </div>
    </div>
  )
}
