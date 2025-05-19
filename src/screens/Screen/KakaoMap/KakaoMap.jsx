import React, { useEffect } from 'react';
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  const [loading, error] = useKakaoLoader({
    appkey: "bb20f8d7395f8d42ee73644132549797",
    libraries: [], // 필요시 ["clusterer", "services"] 등 추가
  });

  if (loading) return <div>지도를 불러오는 중입니다...</div>;
  if (error) return <div>지도를 불러오는 데 실패했습니다 🥲</div>;

  return (
    <div style={{
        width: "100%",
        height: "calc(100vh - 70px)",
        position: "relative", // 중요!
        zIndex: 0, // 낮은 값으로 버튼 안 가리게!
        }}>
      <Map
        center={{ lat: 37.566826, lng: 126.9786567 }}
        style={{ width: "100%", height: "100%" }}
        level={3}
      >
        <MapMarker position={{ lat: 37.566826, lng: 126.9786567 }}>
          <div style={{ color: "#000" }}>여기가 서울 시청이에요!</div>
        </MapMarker>
      </Map>
    </div>
  );
};

export default KakaoMap;
