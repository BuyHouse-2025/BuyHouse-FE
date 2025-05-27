import "./style.css";
import { LocationDips } from "../../../../components/LocationDips";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Frame4 = ({ onClose, selectedSido, selectedGugun, selectedDong, selectedDongcode }) => {
  const [interestList, setInterestList] = useState([]);

  useEffect(() => {
    const fetchInterest = async () => {
      try {
        const token = localStorage.getItem("authToken");
        console.log("▶️ /api/users 요청 보냄…", token);

        const res = await axios.get("http://localhost:8080/api/users/interest", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        console.log("🎯 응답 구조 확인:", res.data);
        setInterestList(res.data.interests || []);
      } catch (err) {
        console.error("❌ 관심지역 불러오기 실패", err);
      }
    };

    fetchInterest();
  }, [selectedDongcode]); // ✅ 동코드가 바뀔 때마다 관심지역 새로고침


  return (
    <div className="frame-4">
      <div className="frame-37">
        <div className="frame-38">
          <div className="text-wrapper-59">{selectedSido}</div>
          <img
            className="mask-group-3"
            alt="Mask group"
            src="https://c.animaapp.com/JuAZje8Q/img/mask-group-26@2x.png"
          />
          <div className="text-wrapper-60">{selectedGugun}</div>
          <img
            className="mask-group-3"
            alt="Mask group"
            src="https://c.animaapp.com/JuAZje8Q/img/mask-group-26@2x.png"
          />
          <div className="text-wrapper-61">{selectedDong}</div>
          

        </div>
        <LocationDips
            key={selectedDongcode || "empty"} // ✅ key로 리렌더링 강제
            className="mask-group-instance"
            dongcode={selectedDongcode}
            interested={interestList}
          />
        
      </div>

      {/* ❗ 이 닫기 버튼에 onClose 연결 */}
			
      <div className="close-svg-fill-wrapper" onClick={onClose}>
        <div className="close-svg-fill">
          <div className="close-svg">
            <img
              className="mask-group-4"
              alt="Close"
              src="https://c.animaapp.com/JuAZje8Q/img/mask-group-27@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
