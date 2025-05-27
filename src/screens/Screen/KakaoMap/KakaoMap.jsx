"use client"

import { useEffect, useState } from "react"
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk"

const KakaoMap = ({ center, locationInfo, onBoundsChange, apartmentList = [], onMarkerClick }) => {
  const [loading, error] = useKakaoLoader({
    appkey: "bb20f8d7395f8d42ee73644132549797",
    libraries: [],
  })

  const handleBoundsChanged = (map) => {
    const bounds = map.getBounds();
    const sw = bounds.getSouthWest(); // min
    const ne = bounds.getNorthEast(); // max

    onBoundsChange({
      minLat: sw.getLat(),
      minLng: sw.getLng(),
      maxLat: ne.getLat(),
      maxLng: ne.getLng(),
    });
  };

  // Default center (Seoul City Hall)
  const [mapCenter, setMapCenter] = useState({
    lat: 37.566826,
    lng: 126.9786567,
  })

  // Update map center when center prop changes
  useEffect(() => {
    console.log("📍 들어온 center 값 확인:", center)

    if (
      center &&
      typeof center.lat === "number" &&
      typeof center.lng === "number"
    ) {
      setMapCenter(center)
    } else if (
      center &&
      !isNaN(parseFloat(center.lat)) &&
      !isNaN(parseFloat(center.lng))
    ) {
      setMapCenter({
        lat: parseFloat(center.lat),
        lng: parseFloat(center.lng),
      })
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
      <Map
        center={mapCenter}
        style={{ width: "100%", height: "100%" }}
        level={3}
        onCreate={(map) => {
          map.addListener("idle", () => {
            // ✅ 조건문 추가
            if (onBoundsChange) {
              handleBoundsChanged(map);
            }
          });
        }}
      >
        {/* 중앙 마커 */}
        {/* <MapMarker position={mapCenter}>
          <div style={{ color: "#000", padding: "5px", backgroundColor: "white", borderRadius: "4px" }}>
            {locationInfo ? `${locationInfo.sido} ${locationInfo.district} ${locationInfo.neighborhood}` : "서울 시청"}
          </div>
        </MapMarker> */}

        {/* 아파트 리스트 마커들 */}
        {apartmentList.map((apt, idx) => (
          <MapMarker
            key={idx}
            position={{ lat: apt.lat, lng: apt.lng }}
            onClick={() => onMarkerClick?.(apt)}
          >
            <div style={{ background: "#fff", padding: "2px 5px", borderRadius: "4px", fontSize: "12px", minWidth: "150px", textAlign: "center"}}>
              {apt.aptNm}
            </div>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
};

export default KakaoMap
