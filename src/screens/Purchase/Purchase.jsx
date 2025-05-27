import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import { CloseSvgFill } from "../../components/CloseSvgFill";

export const Purchase = ({ onClose, aptSeq, onToggle }) => {
  const [square, setSquare] = useState("");
  const [floor, setFloor] = useState("");

  // 2) '검색하기' 클릭 시 실행될 핸들러
  const handlePurchase = async () => {
    const token = localStorage.getItem("authToken");
    const date = new Date();
    const purchaseRequestDto = {
      floor:     floor,
      dealYear:  date.getFullYear(),
      dealMonth:  date.getMonth()+1,
      dealDay: date.getDay(),
      excluUseAr: square
    };

    try {
      // proxy 설정이 있으면 상대경로, 없으면 full URL 사용
      const res = await axios.post(
        `http://localhost:8080/api/estate/${aptSeq}/purchase`,
        purchaseRequestDto,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("구매 결과:", res.data);
      // TODO: res.data를 부모 state로 끌어올려서 화면에 렌더링
      onToggle?.("two"); // ✅ 구매 성공 → 판매 상태로 변경
    } catch (err) {
      console.error("구매 오류:", err);
    } finally {
      onClose();
    }
  };
    
  return (
    <div className="screen-wrapper" data-model-id="1:1298">
      <div className="purchase_top">
        <div>구매할 아파트의 평형과 층수를 입력하세요</div>
        <div className="favtop" onClick={onClose}>
          <CloseSvgFill className="close-svg-fill-instance" />
        </div>
      </div>
      <div className="frame-78">
        <div className="frame-79">
          <div className="input-wrapper-p">
            <input
              className="text-input-3p"
              type="number"
              placeholder="평형"
              value={square}
              onChange={(e) => setSquare(e.target.value)}
            />
          </div>

          <div className="input-wrapper-p">
            <input
              className="text-input-4p"
              type="number"
              placeholder="층수"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            />
          </div>
        </div>

        <div className="background-9" onClick={handlePurchase}>
          <div className="text-wrapper-103">구매하기</div>
        </div>
      </div>
    </div>
  );
};
