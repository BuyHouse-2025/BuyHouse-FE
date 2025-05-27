// src/screens/ScreenWrapper/ScreenWrapper.jsx
import React, { useState } from "react";
import "./style.css";

export const ScreenWrapper = ({ onClose, onCardClick, onSearch }) => {
  const [minSquare, setMinSquare] = useState("");
  const [maxSquare, setMaxSquare] = useState("");

  const handleSearch = async () => {
    const dto = {
      aptNm:     null,
      minPrice:  null,
      maxPrice:  null,
      minSquare: minSquare ? Number(minSquare) : null,
      maxSquare: maxSquare ? Number(maxSquare) : null,
    };

    try {
      const res = await fetch("http://localhost:8080/api/estate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      });
      const data = await res.json();
      console.log("🔎 평형 검색 결과:", data);

      // 1) 검색 결과를 부모로 전달
      onSearch(data);

      // 2) 팝업 닫기
      onClose();
    } catch (err) {
      console.error("❌ 평형 검색 오류:", err);
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
