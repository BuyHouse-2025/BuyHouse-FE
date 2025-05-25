import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
                   // ← axios import
import "./style.css";

export const Screen6 = () => {
  const { login } = useAuth(); 
  const [loginId, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");   // 에러 상태 추가
  const navigate = useNavigate();                 // 리다이렉트용

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const form = new URLSearchParams();
    form.append("loginId", loginId);
    form.append("password", password);

    const response = await axios.post("http://localhost:8080/login", form, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      withCredentials: true,
    });

    const token = response.headers["authorization"]?.replace("Bearer ", "");
    login(token);  // ✅ 이제 완벽
    localStorage.setItem("authToken", token);

    navigate("/auth/normal");
  } catch (err) {
    console.error("로그인 실패:", err);
  }
};

  const handleKakaoLogin = () => {
    const kakaoURL = `http://localhost:8080/api/oauth2/authorization/kakao`;
    window.location.href = kakaoURL;
  };

  const handleNaverLogin = () => {
    const naverURL = `http://localhost:8080/api/oauth2/authorization/naver`;
    window.location.href = naverURL;
  };

  return (
    <div className="screen-6" data-model-id="1:557">
      <Link className="frame-107" to="/">
        <img
          className="v-3"
          alt="V"
          src="https://c.animaapp.com/JuAZje8Q/img/--------v4-2@2x.png"
        />
        <div className="text-wrapper-116">집사</div>
      </Link>

      <form className="form-list-item" onSubmit={handleSubmit}>
        <div className="frame-108">
          <div className="frame-109">
            <div className="border-2">
              <input
                className="text"
                placeholder=" "
                value={loginId}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div className="label">아이디</div>
            </div>

            <div className="border-3">
              <input
                className="text"
                type="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="label-2">비밀번호</div>
            </div>

            <div className="frame-110">
              <div className="label-3">로그인 상태 유지</div>
              <img
                className="image-background"
                alt="Image background"
                src="https://c.animaapp.com/JuAZje8Q/img/image-background@2x.png"
              />
            </div>
          </div>

          {errorMsg && (
            <p className="error-message" style={{ color: "red" }}>
              {errorMsg}
            </p>
          )}

          <div className="frame-111">
            <button type="submit" className="view-7">
              <div className="text-wrapper-117">로그인</div>
            </button>

            <div
              className="view-8"
              onClick={handleKakaoLogin}
              style={{ cursor: "pointer" }}
            >
              <div className="text-wrapper-118">카카오 로그인</div>
              <img
                className="image-10"
                alt="Image"
                src="https://c.animaapp.com/JuAZje8Q/img/image-3-1@2x.png"
              />
            </div>

            <div
              className="view-9"
              onClick={handleNaverLogin}
              style={{ cursor: "pointer" }}
            >
              <div className="text-wrapper-119">네이버 로그인</div>
              <img
                className="element-3"
                alt="Element"
                src="https://c.animaapp.com/JuAZje8Q/img/------1@2x.png"
              />
            </div>
          </div>

          <div className="frame-112">
            <div className="overlap-group-4">
              <div className="horizontal-divider" />
              <div className="background-12">
                <div className="text-wrapper-120">아직 계정이 없다면</div>
              </div>
            </div>
          </div>

          <Link to="/join">
            <button type="button" className="button-3">
              <div className="text-wrapper-121">회원가입</div>
            </button>
          </Link>
        </div>
      </form>

      <div className="frame-113">
        <Link to="/findid" className="text-wrapper-122">
          아이디 찾기
        </Link>
        <div className="vertical-divider-3" />
        <Link to="/findpwd" className="text-wrapper-122">
          비밀번호 찾기
        </Link>
      </div>

      <div className="frame-114">
        <div className="frame-115">
          <div className="item-link-2">SSAFY</div>

          <div className="item-10">
            <div className="link-strong-2">2025.05.29</div>
            <div className="vertical-divider-4" />
          </div>

          <div className="item-11">
            <div className="link-3">WON YUN SEO</div>
            <div className="vertical-divider-4" />
          </div>

          <div className="item-12">
            <div className="link-4">JANG JONG WON</div>
            <img
              className="vertical-divider-5"
              alt="Vertical divider"
              src="https://c.animaapp.com/JuAZje8Q/img/vertical-divider@2x.png"
            />
          </div>
        </div>

        <div className="frame-116">
          <div className="text-wrapper-123">집사</div>
          <div className="text-wrapper-124">Copyright</div>
          <div className="text-wrapper-125">© BUYHOME Corp.</div>
          <div className="text-wrapper-124">All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};
