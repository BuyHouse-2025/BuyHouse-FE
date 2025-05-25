"use client"

import { useEffect, useState } from "react"
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk"

const KakaoMap = ({ center, locationInfo }) => {
  const [loading, error] = useKakaoLoader({
    appkey: "bb20f8d7395f8d42ee73644132549797",
    libraries: [],
  })

  // Default center (Seoul City Hall)
  const [mapCenter, setMapCenter] = useState({
    lat: 37.566826,
    lng: 126.9786567,
  })

  // Update map center when center prop changes
  useEffect(() => {
    if (center) {
      setMapCenter(center)
    }
  }, [center])

  if (loading) return <div>지도를 불러오는 중입니다...</div>
  if (error) return <div>지도를 불러오는 데 실패했습니다 🥲</div>

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 70px)",
        position: "relative",
        zIndex: 0,
      }}
    >
      <Map center={mapCenter} style={{ width: "100%", height: "100%" }} level={3}>
        <MapMarker position={mapCenter}>
          <div style={{ color: "#000", padding: "5px", backgroundColor: "white", borderRadius: "4px" }}>
            {locationInfo ? `${locationInfo.district} ${locationInfo.neighborhood}` : "서울 시청"}
          </div>
        </MapMarker>
      </Map>
    </div>
  )
}

export default KakaoMap
