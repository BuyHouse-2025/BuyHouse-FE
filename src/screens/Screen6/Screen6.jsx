import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Screen6 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 로그인 요청 처리 로직
    console.log("아이디:", username);
    console.log("비밀번호:", password);
    // ex) axios.post('/api/login', { username, password });
  };

  const handleKakaoLogin = () => {
    const Rest_api_key = "d274ab73da030408cdd7247bcf1a8b73";
    const redirect_uri = "http://localhost:8080/auth";
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    window.location.href = kakaoURL;
  };

  const handleNaverLogin = () => {
    const clientId = "EKKqHKrtqCWwEVxRAm05";
    const redirectUri = "http://localhost:8080/auth";
    const state = "secureRandomState123"; // 나중에 uuid 등으로 생성 가능
    const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;
    window.location.href = naverURL;
  };

  return (
    <div className="screen-6" data-model-id="1:557">
      <Link className="frame-107" to="/">
        <img className="v-3" alt="V" src="https://c.animaapp.com/JuAZje8Q/img/--------v4-2@2x.png" />
        <div className="text-wrapper-116">집사</div>
      </Link>

      <form className="form-list-item" onSubmit={handleSubmit}>
        <div className="frame-108">
          <div className="frame-109">
            <div className="border-2">
              <input className="text" placeholder=" " value={username} onChange={(e) => setUsername(e.target.value)} />
              <div className="label">아이디</div>
            </div>

            <div className="border-3">
              <input
                className="text"
                type="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <div className="frame-111">
            <button type="submit" className="view-7">
              <div className="text-wrapper-117">로그인</div>
            </button>

            <div className="view-8" onClick={handleKakaoLogin} style={{ cursor: "pointer" }}>
              <div className="text-wrapper-118">카카오 로그인</div>
              <img className="image-10" alt="Image" src="https://c.animaapp.com/JuAZje8Q/img/image-3-1@2x.png" />
            </div>

            <div className="view-9" onClick={handleNaverLogin} style={{ cursor: "pointer" }}>
              <div className="text-wrapper-119">네이버 로그인</div>
              <img className="element-3" alt="Element" src="https://c.animaapp.com/JuAZje8Q/img/------1@2x.png" />
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
