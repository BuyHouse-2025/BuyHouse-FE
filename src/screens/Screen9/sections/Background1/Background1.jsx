import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { formatKoreanCurrency } from "../../../../utils/fomattersBasic";

export const Background1 = ({ onOpenUpdateMemberInfo, onOpenUpdatePwd }) => {
  const [user, setUser] = useState({
    name: "",
    cash: 0,
    estateAsset: 0,
    totalAsset: 0,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // 1) 로컬 스토리지에서 토큰 꺼내기
        const token = localStorage.getItem("authToken");

        // 2) Authorization 헤더에 'Bearer ' 붙여서 요청
        const res = await axios.get("http://localhost:8080/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // 필요하다면 쿠키 인증용 옵션
          // withCredentials: true,
        });

        const { name, cash, estateAsset, totalAsset } = res.data;
        setUser({ name, cash, estateAsset, totalAsset });
      } catch (err) {
        console.error("사용자 정보 불러오기 실패 ❌", err.response || err);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="background-1">
      <div className="frame-39">
        <div className="frame-40">
          <div className="image-wrapper">
            <img
              className="image-8"
              alt="Image"
              src="https://c.animaapp.com/JuAZje8Q/img/image-1-1@2x.png"
            />
          </div>

          <div className="frame-41">
            <div className="mypage-name">{user.name}님</div>
            <div className="chg-pwd" onClick={onOpenUpdatePwd}>
              비밀번호 변경
            </div>
          </div>
        </div>

        <img
          className="mask-group-5"
          alt="Mask group"
          src="https://c.animaapp.com/JuAZje8Q/img/mask-group-29@2x.png"
          onClick={onOpenUpdateMemberInfo}
        />
      </div>

      <div className="background-3">
        <div className="frame-42">
          <img
            className="money"
            alt="Money"
            src="https://c.animaapp.com/JuAZje8Q/img/money-1@2x.png"
          />
          <img
            className="property"
            alt="Property"
            src="https://c.animaapp.com/JuAZje8Q/img/property-1@2x.png"
          />
          <img
            className="cool"
            alt="Cool"
            src="https://c.animaapp.com/JuAZje8Q/img/cool-1@2x.png"
          />
        </div>

        <div className="frame-43">
          <div className="container-17">
            <div className="text-wrapper-64">현재 소지금</div>
          </div>
          <div className="container-17">
            <div className="text-wrapper-64">부동산 자산</div>
          </div>
          <div className="container-17">
            <div className="text-wrapper-64">총 자산</div>
          </div>
        </div>

        <div className="frame-44">
          <div className="container-18">
            <div className="text-wrapper-65">
              {formatKoreanCurrency(user.cash)}
            </div>
          </div>
          <div className="container-18">
            <div className="text-wrapper-66">
              {formatKoreanCurrency(user.estateAsset)}
            </div>
          </div>
          <div className="container-18">
            <div className="text-wrapper-67">
              {formatKoreanCurrency(user.totalAsset)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
