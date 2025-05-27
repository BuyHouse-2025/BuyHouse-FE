import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Screen4 } from "../Screen4";
import { Screen5 } from "../Screen5";
import { Screen7 } from "../Screen7";
import { Search } from "../Search";
import { BackgroundWrapper } from "../Screen7/sections/BackgroundWrapper";
import { Screen8 } from "../Screen8";
import { Frame4 } from "../Screen8/sections/Frame4";
import { Screen9 } from "../Screen9";
import { ScreenScreen } from "../ScreenScreen";
import { ScreenWrapper } from "../ScreenWrapper";
import axios from "axios";
import "./style.css";
import KakaoMap from "./KakaoMap/KakaoMap";

import { useAuth } from "../context/AuthContext";

export const Screen = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();
  const [showOverlay, setShowOverlay] = useState(false);
  const [screen9Visible, setScreen9Visible] = useState(false);
  const [screen9Active, setScreen9Active] = useState(false);
  const [showScreenScreenOverlay, setShowScreenScreenOverlay] = useState(false);
  const [showScreenWrapperOverlay, setShowScreenWrapperOverlay] = useState(false);
  const [showScreen4Overlay, setShowScreen4Overlay] = useState(false);
  const [showScreen8Overlay, setShowScreen8Overlay] = useState(false);
  const [screen7Visible, setScreen7Visible] = useState(false);
  const [screen7Active, setScreen7Active] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [selectedSido, setSelectedSido] = useState("서울특별시");
  const [selectedGugun, setSelectedGugun] = useState("강남구");
  const [selectedDong, setSelectedDong] = useState("삼성동");
  const [aptSearch, setAptSearch] = useState("");
  const [dongData, setDongData] = useState([]);
  const [mapBounds, setMapBounds] = useState(null);
  const [apartmentList, setApartmentList] = useState([]);
  const [selectedAptDetail, setSelectedAptDetail] = useState(null);

  const [searchRes, setSearchRes] = useState([]);
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState("");

  const [mapCenter, setMapCenter] = useState({
    lat: 37.566826,
    lng: 126.9786567,
  });

  // ✨ 추가: 선택된 위치 정보(지도 마커 라벨용)
  const [locationInfo, setLocationInfo] = useState({
    sido: "서울특별시",
    district: "강남구",
    neighborhood: "삼성동"
  });

  const handleMoveToLocation = (locationData) => {
    setMapCenter({ lat: locationData.lat, lng: locationData.lng });
    setLocationInfo({
      sido: locationData.sido,
      district: locationData.district,
      neighborhood: locationData.neighborhood,
    });
  };

  const openScreen9 = () => {
    setScreen9Visible(true);
    setTimeout(() => setScreen9Active(true), 10);
  };

  const closeScreen9 = () => {
    setScreen9Active(false);
    setTimeout(() => setScreen9Visible(false), 300);
  };

  const openScreen7 = () => {
    setScreen7Visible(true);
    setTimeout(() => setScreen7Active(true), 10);
  };

  const closeScreen7 = () => {
    setScreen7Active(false);
    setTimeout(() => setScreen7Visible(false), 300);
  };

  const openSearch = () => {
    setSearchVisible(true);
    console.log("오픈픈");
    setTimeout(() => setSearchActive(true), 10);
  };

  const closeSearch = () => {
    setSearchActive(false);
    setTimeout(() => setSearchVisible(false), 300);
  };

  useEffect(() => {
    if (!screen9Visible) return;

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        console.log("▶️ /api/users 요청 보냄…", token);

        // 풀 URL을 사용합니다
        const res = await axios.get("http://localhost:8080/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        console.log("✅ 응답 수신:", res.data);
        const { name, cash, estateAsset, totalAsset } = res.data;
        setUser({ name, cash, estateAsset, totalAsset });
        setUserError("");
      } catch (err) {
        console.error("❌ 사용자 정보 요청 실패", err);
        setUserError("유저 정보를 불러오지 못했습니다.");
      }
    };

    fetchUserData();
  }, [screen9Visible]);

useEffect(() => {
  const fetchDongData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/dongcode");
      console.log("동 데이터 확인 👇", res.data); // 여기 찍어보자!
      setDongData(res.data);
    } catch (error) {
      console.error("❌ 동코드 데이터 불러오기 실패", error);
    }
  };

  fetchDongData();
}, []);

  
 // Screen.jsx에서 토큰 저장 부분 수정
useEffect(() => {
  const params = new URLSearchParams(location.search);
  if (!params.toString()) return;
    // 쿼리 파라미터 중 첫 번째 key/value를 토큰으로 사용
    const [[key, value]] = Array.from(params.entries());
    console.log("🕵️‍♀️ URL param key:", key, "value:", value);

    if (value) {
      localStorage.setItem("authToken", value);
      // 쿼리 제거
      navigate(location.pathname, { replace: true });
    }
  }, [location.search, location.pathname, navigate]);

  useEffect(() => {
    const anyOverlayOpen =
      showOverlay ||
      screen9Visible ||
      showScreenScreenOverlay ||
      showScreenWrapperOverlay ||
      showScreen4Overlay ||
      showScreen8Overlay ||
      screen7Visible ||
      searchVisible;

    if (anyOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [
    showOverlay,
    screen9Visible,
    showScreenScreenOverlay,
    showScreenWrapperOverlay,
    showScreen4Overlay,
    showScreen8Overlay,
    screen7Visible,
    searchVisible
  ]);

  const handleLogout = () => {
    logout(); // ← Context에 정의된 logout() 사용
    navigate("/");
  };

  const handleClickOutside = (e, closeFn) => {
    const isScreen7 =
      e.target.classList.contains("screen7-full-overlay") || e.target.classList.contains("screen7-overlay-content");
    if (
      e.target.classList.contains("overlay") ||
      e.target.classList.contains("screenscreen-overlay") ||
      isScreen7 ||
      e.target.classList.contains("screen9-full-overlay") ||
      e.target.classList.contains("screen9-overlay-content") ||
      e.target.classList.contains("search-full-overlay") ||
      e.target.classList.contains("search-overlay-content")
    ) {
      closeFn();
    }
  };

  // 아파트 검색 핸들러
  const handleNameSearch = async () => {
    const searchRequestDto = {
      aptNm: aptSearch ? aptSearch : null,
      minPrice: null,
      maxPrice: null,
      minSquare: null,
      maxSquare: null,
    };

    try {
      const res = await axios.post("http://localhost:8080/api/estate", searchRequestDto);
      console.log("🗂️ 아파트 이름 검색 결과:", res.data);
      setSearchRes(res.data);
      openSearch();
    } catch (err) {
      console.error("❌ 아파트 이름 검색 오류:", err);
    }
  };

  // 지도 아파트 표시 핸들러
  const handleFetchApartmentsInBounds = async () => {
    if (!mapBounds) {
      console.warn("❗ 지도 경계값이 아직 설정되지 않았습니다.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/estate/maker", mapBounds);
      console.log("📍 버튼 클릭으로 조회된 아파트 리스트:", response.data);
      setApartmentList(response.data); // 필요시
    } catch (error) {
      console.error("❌ 아파트 리스트 조회 실패:", error);
    }
  };

  // 클릭된 aptSeq로 상세정보 요청 → 상태에 저장 → 오버레이 열기
  const handleMarkerClick = async (apt) => {
    try {
      // ① apt.aptSeq 를 백엔드로 요청
      const res = await axios.get(`http://localhost:8080/api/estate/${apt.aptSeq}`);
      // ② 받은 DTO를 상태에 저장
      setSelectedAptDetail(res.data);
      // ③ 오버레이 열기
      openScreen7();
    } catch (err) {
      console.error("❌ 아파트 상세 조회 실패", err);
    }
  };

  const handleCardClick = async (aptSeq) => {
    try {
      const res = await axios.get(`http://localhost:8080/api/estate/${aptSeq}`);
      setSelectedAptDetail(res.data);
      openScreen7();
    } catch (err) {
      console.error("❌ 아파트 상세 조회 실패", err);
    }
  };


  return (
    <div className="screen">
      {screen7Visible && (
        <div className="screen7-full-overlay" onClick={(e) => handleClickOutside(e, closeScreen7)}>
          <div
            className={`screen7-overlay-content ${screen7Active ? "active" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <BackgroundWrapper aptDetail={selectedAptDetail} onClose={closeScreen7} />
            <Screen7 aptDetail={selectedAptDetail} onClose={closeScreen7} />
          </div>
        </div>
      )}

      {searchVisible && (
        <div className="search-full-overlay" onClick={(e) => handleClickOutside(e, closeSearch)}>
          <div
            className={`search-overlay-content ${searchActive ? "active" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Search results={searchRes} onCardClick={handleCardClick} />
          </div>
        </div>
      )}

      {screen9Visible && (
        <div className="screen9-full-overlay" onClick={(e) => handleClickOutside(e, closeScreen9)}>
          <div className={`screen9-overlay ${screen9Active ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
            <div className="screen9-content">
              <div className="close-button" onClick={closeScreen9}>
                <img alt="Close" src="https://c.animaapp.com/JuAZje8Q/img/mask-group-27@2x.png" />
              </div>

              {/* Screen9 컴포넌트에 user/userError props 전달 */}
              <Screen9 userInfo={user} error={userError} onClose={closeScreen9} />
            </div>
          </div>
        </div>
      )}

      {showOverlay && (
        <div className="overlay" onClick={(e) => handleClickOutside(e, () => setShowOverlay(false))}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <div className="overlay-header">
              <div className="background-11">
                <div className="frame-105">
                  <div className="frame-106">
                    <div className="EA-ED" />
                    <div className="paragraph-2">
                      <div className="text-wrapper-115">주요 경제 지표</div>
                    </div>
                  </div>
                  <img
                    className="mask-group-15"
                    alt="Close"
                    src="https://c.animaapp.com/JuAZje8Q/img/mask-group-27@2x.png"
                    onClick={() => setShowOverlay(false)}
                  />
                </div>
              </div>
            </div>
            <div className="overlay-body">
              <Screen5 />
            </div>
          </div>
        </div>
      )}

      {showScreenScreenOverlay && (
        <div
          className="screenscreen-overlay"
          onClick={(e) => handleClickOutside(e, () => setShowScreenScreenOverlay(false))}
        >
          <div className="screenscreen-content" onClick={(e) => e.stopPropagation()}>
            <div className="frame-74">
              <div className="text-wrapper-98">가격</div>
              <div className="background-6">
                <div className="close-svg-wrapper">
                  <div className="close-svg-2">
                    <img
                      className="mask-group-10"
                      alt="Mask group"
                      src="https://c.animaapp.com/JuAZje8Q/img/mask-group-27@2x.png"
                      onClick={() => setShowScreenScreenOverlay(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <ScreenScreen onClose={() => setShowScreenScreenOverlay(false)} />
          </div>
        </div>
      )}

      {showScreenWrapperOverlay && (
        <div
          className="screenscreen-overlay"
          onClick={(e) => handleClickOutside(e, () => setShowScreenWrapperOverlay(false))}
        >
          <div className="screenscreen-content" onClick={(e) => e.stopPropagation()}>
            <div className="frame-74">
              <div className="text-wrapper-98">평형</div>
              <div className="background-6">
                <div className="close-svg-wrapper">
                  <div className="close-svg-2">
                    <img
                      className="mask-group-10"
                      alt="Mask group"
                      src="https://c.animaapp.com/JuAZje8Q/img/mask-group-27@2x.png"
                      onClick={() => setShowScreenWrapperOverlay(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <ScreenWrapper onClose={() => setShowScreenWrapperOverlay(false)} />
          </div>
        </div>
      )}

      {showScreen4Overlay && (
        <div
          className="screenscreen-overlay"
          data-type="favorite"
          onClick={(e) => handleClickOutside(e, () => setShowScreen4Overlay(false))}
        >
          <div className="screenscreen-content" onClick={(e) => e.stopPropagation()}>
            <div className="frame-74">
              <div className="interest-title">관심지역</div>
              <div className="background-6">
                <div className="close-svg-wrapper">
                  <div className="close-svg-2">
                    <img
                      className="mask-group-10"
                      alt="Mask group"
                      src="https://c.animaapp.com/JuAZje8Q/img/mask-group-27@2x.png"
                      onClick={() => setShowScreen4Overlay(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Screen4 dongData={dongData} onMoveToLocation={handleMoveToLocation} />
          </div>
        </div>
      )}

      {showScreen8Overlay && (
        <div className="overlay" onClick={(e) => handleClickOutside(e, () => setShowScreen8Overlay(false))}>
          <div
            className="screen8-overlay"
            onClick={(e) => e.stopPropagation()}
            style={{
              borderRadius: "10px",
              border: "1px solid #3B82F6",
              background: "rgba(255, 255, 255, 0)",
              boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.16)",
              width: "363px",
              height: "444px",
              position: "fixed",
            }}
          >
            <Frame4
              onClose={() => setShowScreen8Overlay(false)}
              selectedSido={selectedSido}
              selectedGugun={selectedGugun}
              selectedDong={selectedDong}
            />

            <Screen8
              dongData={dongData}
              selectedSido={selectedSido}
              setSelectedSido={setSelectedSido}
              selectedGugun={selectedGugun}
              setSelectedGugun={setSelectedGugun}
              selectedDong={selectedDong}
              setSelectedDong={setSelectedDong}
              onMoveToLocation={handleMoveToLocation}
            />
          </div>
        </div>
      )}

      <div className="overlap" >
        <KakaoMap center={mapCenter} locationInfo={{
          sido: selectedSido,
          district: selectedGugun,
          neighborhood: selectedDong
        }}
          onBoundsChange={(bounds) => {
            setMapBounds(bounds); // 지도 이동 시 bounds만 저장
          }}
          onMarkerClick={handleMarkerClick}
          apartmentList={apartmentList}
        />

      </div>

      <div className="overlay-shadow" />
      <div className="view-3" />

      <div className="frame-60">
        <div className="frame-61">
          <div className="frame-62">
            <div className="frame-63">
              <div className="frame-64">
                <img className="v" alt="V" src="https://c.animaapp.com/JuAZje8Q/img/--------v4@2x.png" />

                <div className="text-wrapper-89" style={{ height: "61px", lineHeight: "61px" }}>
                  집사
                </div>
              </div>
            </div>

            <div className="frame-65">
              <button className="background-border-2" onClick={handleFetchApartmentsInBounds}>
                <img
                  className="mask-group-6"
                  alt="Mask group"
                  src="https://c.animaapp.com/JuAZje8Q/img/mask-group@2x.png"
                />
                <div
                  className="text-wrapper-90"
                  style={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}
                >
                  아파트
                </div>
              </button>

              <button className="background-border-3" onClick={() => setShowOverlay(true)}>
                <div
                  className="text-wrapper-91"
                  style={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}
                >
                  경제지표
                </div>
                <img className="profit" alt="Profit" src="https://c.animaapp.com/JuAZje8Q/img/profit-1@2x.png" />
              </button>
              <Link className="community-button" to="/community">
                  커뮤니티
              </Link>

            </div>
          </div>

          <div className="frame-66">
            {isLoggedIn ? (
              // 로그인된 경우: My 아이콘 + 로그아웃 버튼
              <>
                <div className="overlap-group-wrapper" onClick={openScreen9}>
                  <div className="overlap-group">
                    <div className="text-wrapper-92">My</div>
                    <img className="user" alt="User" src="https://c.animaapp.com/JuAZje8Q/img/user-1@2x.png" />
                  </div>
                </div>
                <button
                  className="background-4" // 스타일은 기존 로그인하기 버튼과 동일하게
                  onClick={handleLogout}
                >
                  <div className="text-wrapper-93">로그아웃</div>
                </button>
              </>
            ) : (
              // 비로그인 상태: 로그인 / 회원가입
              <>
                <Link className="background-4" to="/login">
                  <div className="text-wrapper-93">로그인하기</div>
                </Link>
                <Link to="/join">
                  <button className="button-2">
                    <div className="text-wrapper-94">회원가입</div>
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="frame-67">
          <div className="frame-68">
            <div className="overlay-wrapper">
              <div className="overlay-3">
                <div className="frame-69">
                  <button className="search-button" type="button" aria-label="Search" onClick={handleNameSearch}>
                    <img
                      src="https://static-00.iconduck.com/assets.00/system-search-symbolic-icon-256x256-5bb8fl7o.png"
                      alt="Search"
                      className="search-icon"
                    />
                  </button>
                  <div className="container-wrapper">
                    <input
                      className="container-21"
                      placeholder="아파트, 지역"
                      value={aptSearch}
                      onChange={(e) => setAptSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="background-border-4" onClick={() => setShowScreenScreenOverlay(true)}>
              <div className="frame-70">
                <div className="text-wrapper-95">가격</div>

                <img
                  className="mask-group-7"
                  alt="Mask group"
                  src="https://c.animaapp.com/JuAZje8Q/img/mask-group-1@2x.png"
                />
              </div>
            </div>

            <div className="background-border-4" onClick={() => setShowScreenWrapperOverlay(true)}>
              <div className="frame-70">
                <div className="text-wrapper-95">평형</div>
                <img
                  className="mask-group-7"
                  alt="Mask group"
                  src="https://c.animaapp.com/JuAZje8Q/img/mask-group-2@2x.png"
                />
              </div>
            </div>

            <div className="background-border-5" onClick={() => setShowScreen4Overlay(true)}>
              <div className="frame-71">
                <div className="text-wrapper-96">관심지역</div>
                <img
                  className="mask-group-7"
                  alt="Mask group"
                  src="https://c.animaapp.com/JuAZje8Q/img/mask-group-3@2x.png"
                />
              </div>
            </div>
          </div>

          <div className="view-4" onClick={() => setShowScreen8Overlay(true)}>
            <div className="frame-72">
              <div className="mask-group-wrapper">
                <img
                  className="mask-group-8"
                  alt="Mask group"
                  src="https://c.animaapp.com/JuAZje8Q/img/mask-group-4@2x.png"
                />
              </div>
              <div className="frame-73">
                <div className="text-wrapper-97">
                  {selectedSido.replace("특별시", "").replace("광역시", "").replace("도", "")}
                </div>

                <div className="background-5">
                  <div className="front-svg-fill">
                    <div className="div-6">
                      <img
                        className="mask-group-9"
                        alt="Mask group"
                        src="https://c.animaapp.com/JuAZje8Q/img/mask-group-7@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-97">{selectedGugun}</div>
                <div className="background-5">
                  <div className="front-svg-fill">
                    <div className="div-6">
                      <img
                        className="mask-group-9"
                        alt="Mask group"
                        src="https://c.animaapp.com/JuAZje8Q/img/mask-group-7@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-97">{selectedDong}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
