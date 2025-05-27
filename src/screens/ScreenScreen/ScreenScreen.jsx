import React, { useState } from "react";
import axios from "axios";
import "./style.css";

export const ScreenScreen = ({ onClose }) => {
  // 1) 입력값을 보관할 state 추가
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // 2) '검색하기' 클릭 시 실행될 핸들러
  const handleSearch = async () => {
    // DTO 객체 구성 (필요 없는 값은 null로)
    const searchRequestDto = {
      aptNm: null,
      minPrice: minPrice ? Number(minPrice) : null,
      maxPrice: maxPrice ? Number(maxPrice) : null,
      minSquare: null,
      maxSquare: null,
    };

    try {
      // proxy가 설정되어 있으면 상대경로로, 아니면 전체 URL
      const res = await axios.post("http://localhost:8080/api/estate", searchRequestDto);
      console.log("검색 결과:", res.data);
      // TODO: res.data를 부모에 전달하거나 화면에 표시
    } catch (err) {
      console.error("검색 오류:", err);
    } finally {
      // 오버레이 닫기
      onClose();
    }
  };

  return (
    <div className="screen-screen" data-model-id="1:1318">
      <div className="frame-75">
        <div className="frame-76">
          {/* 최소가격 입력 */}
          <div className="text-input-wrapper">
            <input
              className="text-input"
              type="number"
              placeholder="최소"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>

          <div className="text-wrapper-99">~</div>

          {/* 최대가격 입력 */}
          <div className="text-input-wrapper">
            <input
              className="text-input-2"
              type="number"
              placeholder="최대"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        {/* 검색하기 버튼에 onClick 연결 */}
        <div className="background-7" onClick={handleSearch}>
          <div className="text-wrapper-100">검색하기</div>
        </div>
      </div>
    </div>
  );
};
