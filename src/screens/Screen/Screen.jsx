import { Link } from "react-router-dom";
import { Screen5 } from "../Screen5";
import { Screen9 } from "../Screen9";
import { ScreenScreen } from "../ScreenScreen";
import { ScreenWrapper } from "../ScreenWrapper";
import { Screen4 } from "../Screen4";
import { Screen8 } from "../Screen8";
import { Frame4 } from "../Screen8/sections/Frame4";
import React, { useEffect, useState, useRef } from "react";
import { Screen7 } from "../Screen7";
import { BackgroundWrapper } from "../Screen7/sections/BackgroundWrapper";
import "./style.css";

export const Screen = ({}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [screen9Visible, setScreen9Visible] = useState(false);
  const [screen9Active, setScreen9Active] = useState(false);
  const [showScreenScreenOverlay, setShowScreenScreenOverlay] = useState(false);
  const [showScreenWrapperOverlay, setShowScreenWrapperOverlay] = useState(false);
  const [showScreen4Overlay, setShowScreen4Overlay] = useState(false);
  const [showScreen8Overlay, setShowScreen8Overlay] = useState(false);
  const [screen7Visible, setScreen7Visible] = useState(false);
  const [screen7Active, setScreen7Active] = useState(false);

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

  useEffect(() => {
    const anyOverlayOpen =
      showOverlay ||
      screen9Visible ||
      showScreenScreenOverlay ||
      showScreenWrapperOverlay ||
      showScreen4Overlay ||
      showScreen8Overlay ||
      screen7Visible;

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
  ]);

  const handleClickOutside = (e, closeFn) => {
    const isScreen7 =
      e.target.classList.contains("screen7-full-overlay") || e.target.classList.contains("screen7-overlay-content");
    if (
      e.target.classList.contains("overlay") ||
      e.target.classList.contains("screenscreen-overlay") ||
      isScreen7 ||
      e.target.classList.contains("screen9-full-overlay")
    ) {
      closeFn();
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
            <BackgroundWrapper onClose={closeScreen7} />
            <Screen7 />
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

      {screen9Visible && (
        <div className="screen9-full-overlay" onClick={(e) => handleClickOutside(e, closeScreen9)}>
          <div className={`screen9-overlay ${screen9Active ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
            <div className="screen9-content">
              <div className="close-button" onClick={closeScreen9}>
                <img alt="Close" src="https://c.animaapp.com/JuAZje8Q/img/mask-group-27@2x.png" />
              </div>
              <Screen9 />
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
            <ScreenScreen />
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
            <ScreenWrapper />
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
              <div className="text-wrapper-98">관심지역</div>
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
            <Screen4 />
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
            <Frame4 onClose={() => setShowScreen8Overlay(false)} />

            <Screen8 />
          </div>
        </div>
      )}

      <div className="overlap">
        <div className="element-wrapper" onClick={openScreen7} style={{ cursor: "pointer" }}>
          <p className="element-2">
            <span className="text-wrapper-87">
              26평
              <br />
            </span>
            <span className="text-wrapper-88">6.6억</span>
          </p>
        </div>
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
              <button className="background-border-2">
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
            </div>
          </div>

          <div className="frame-66">
            <div className="overlap-group-wrapper" onClick={openScreen9}>
              <div className="overlap-group">
                <div className="text-wrapper-92">My</div>

                <img className="user" alt="User" src="https://c.animaapp.com/JuAZje8Q/img/user-1@2x.png" />
              </div>
            </div>

            <Link className="background-4" to="/login">
              <div className="text-wrapper-93">로그인하기</div>
            </Link>

            <Link to="/join">
              <button className="button-2">
                <div className="text-wrapper-94">회원가입</div>
              </button>
            </Link>
          </div>
        </div>

        <div className="frame-67">
          <div className="frame-68">
            <div className="overlay-wrapper">
              <div className="overlay-3">
                <div className="frame-69">
                  <button className="search-button" type="submit" aria-label="Search">
                    <img
                      src="https://static-00.iconduck.com/assets.00/system-search-symbolic-icon-256x256-5bb8fl7o.png"
                      alt="Search"
                      className="search-icon"
                    />
                  </button>
                  <div className="container-wrapper">
                    <input className="container-21" placeholder="아파트, 지역" />
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
                <div className="text-wrapper-97">서울</div>

                <div className="background-5">
                  <div className="div-6">
                    <div className="front-svg-fill">
                      <div className="div-6">
                        <img
                          className="mask-group-9"
                          alt="Mask group"
                          src="https://c.animaapp.com/JuAZje8Q/img/mask-group-7@2x.png"
                        />
                      </div>
                    </div>

                    <img
                      className="mask-group-9"
                      alt="Mask group"
                      src="https://c.animaapp.com/JuAZje8Q/img/mask-group-8@2x.png"
                    />
                  </div>
                </div>

                <div className="text-wrapper-97">강남구</div>

                <div className="background-5">
                  <div className="div-6">
                    <div className="front-svg-fill">
                      <div className="div-6">
                        <img
                          className="mask-group-9"
                          alt="Mask group"
                          src="https://c.animaapp.com/JuAZje8Q/img/mask-group-7@2x.png"
                        />
                      </div>
                    </div>

                    <img
                      className="mask-group-9"
                      alt="Mask group"
                      src="https://c.animaapp.com/JuAZje8Q/img/mask-group-8@2x.png"
                    />
                  </div>
                </div>

                <div className="text-wrapper-97">삼성동</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
