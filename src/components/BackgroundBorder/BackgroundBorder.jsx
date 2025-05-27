import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

export const BackgroundBorder = ({ property1 = "one", divClassName, onToggle, openOverlay, aptSeq }) => {
  const [mode, setMode] = useState(property1); // 내부 상태 따로 관리

  useEffect(() => {
    setMode(property1); // 외부 prop 변경되면 반영!
  }, [property1]);

  const handleClick = () => {
    if (mode === "one") {
      openOverlay?.(); // 구매 오버레이 띄우기
    } else {
      const confirmed = window.confirm("정말 판매하시겠습니까?");
      if (!confirmed) return;
      try {
        const token = localStorage.getItem("authToken");
        axios.delete(
          `http://localhost:8080/api/estate/owned/${aptSeq}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

      } catch (err) {
        console.error("❌ 판매 요청 실패:", err);
      }
  
    }

    const newMode = mode === "one" ? "two" : "one";
    setMode(newMode);
    onToggle?.(newMode);
  };

  return (
    <div className={`background-border ${mode} animated-toggle`} onClick={handleClick}>
      <div className={`div-5 ${divClassName}`}>
        <span className="toggle-text">
          {mode === "one" && <>구매</>}
          {mode === "two" && <>판매</>}
        </span>
      </div>
    </div>
  );
};
