// src/screens/Screen/ScreenScreen.jsx
import React, { useState } from "react";
import "./style.css";

export const ScreenScreen = ({ onClose, onCardClick, onSearch }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = async () => {
    const dto = {
      aptNm: null,
      minPrice: minPrice ? Number(minPrice) : null,
      maxPrice: maxPrice ? Number(maxPrice) : null,
      minSquare: null,
      maxSquare: null,
    };

    try {
      const res = await fetch("http://localhost:8080/api/estate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      });
      const data = await res.json();
      console.log("🔎 ScreenScreen 검색 결과:", data);

      // 1) 부모에게 결과 전달
      onSearch(data);

      // 2) 팝업 닫기
      onClose();
    } catch (err) {
      console.error("❌ ScreenScreen 검색 오류:", err);
    }
  };

  return (
    <div className="screen-screen" data-model-id="1:1318">
      <div className="frame-75">
        <div className="frame-76">
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

        <div className="background-7" onClick={handleSearch}>
          <div className="text-wrapper-100">검색하기</div>
        </div>
      </div>
    </div>
  );
};
