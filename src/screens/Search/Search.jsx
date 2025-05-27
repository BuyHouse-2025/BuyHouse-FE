// Search.jsx
import React from "react";
import "./style.css";
import { Card } from "./Card";

export const Search = ({ results = [], onCardClick }) => {
  return (
    <div className="search"> {/* ✅ 이 래퍼가 필요해! */}
      <div className="search-list">
        {results.length === 0 ? (
          <div>검색 결과가 없습니다</div>
        ) : (
          results.map((item) => (
            <div key={item.aptSeq} className="search-item">
              <Card
                aptSeq={item.aptSeq}
                aptNm={item.aptNm}
                buildYear={item.buildYear}
                roadName={item.roadNm}
                roadNmBonbun={item.roadNmBonbun}  
                onClick={() => onCardClick(item.aptSeq)}   
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
