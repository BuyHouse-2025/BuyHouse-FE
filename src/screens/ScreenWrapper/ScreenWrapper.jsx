import React, { useState } from "react";
import axios from "axios";
import "./style.css";

export const ScreenWrapper = ({ onClose }) => {
    // 1) 평형 입력값 state
  const [minSquare, setMinSquare] = useState("");
  const [maxSquare, setMaxSquare] = useState("");

  // 2) '검색하기' 클릭 시 실행될 핸들러
    const handleSearch = async () => {
    const searchRequestDto = {
      aptNm:     null,
      minPrice:  null,
      maxPrice:  null,
      minSquare: minSquare ? Number(minSquare) : null,
      maxSquare: maxSquare ? Number(maxSquare) : null,
    };

    try {
      // proxy 설정이 있으면 상대경로, 없으면 full URL 사용
      const res = await axios.post("http://localhost:8080/api/estate", searchRequestDto);
      console.log("평형 검색 결과:", res.data);
      // TODO: res.data를 부모 state로 끌어올려서 화면에 렌더링
    } catch (err) {
      console.error("평형 검색 오류:", err);
    } finally {
      onClose();
    }
  };
    
  return (
    <div className="screen-wrapper" data-model-id="1:1298">
      <div className="frame-78">
        <div className="frame-79">
          <div className="input-wrapper">
            <input
              className="text-input-3"
              type="number"
              placeholder="최소"
              value={minSquare}
              onChange={(e) => setMinSquare(e.target.value)}
            />
          </div>

          <div className="text-wrapper-102">~</div>

          <div className="input-wrapper">
            <input
              className="text-input-4"
              type="number"
              placeholder="최대"
              value={maxSquare}
              onChange={(e) => setMaxSquare(e.target.value)}
            />
          </div>
        </div>

        <div className="background-9" onClick={handleSearch}>
          <div className="text-wrapper-103">검색하기</div>
        </div>
      </div>
    </div>
  );
};
