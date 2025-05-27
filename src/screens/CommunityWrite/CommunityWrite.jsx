"use client";


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import "./style.css";

export const CommunityWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useAuth();
  const userName = user?.name || "사용자";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      // Here you would typically save the post to your backend
      alert("게시글이 작성되었습니다.");
      navigate("/community");
    } else {
      alert("제목과 내용을 모두 입력해주세요.");
    }

    const postRequestDto = { title, content };

    try {
      // JWT 토큰 인증이 필요하다면 헤더에 담아주세요.
      const token = localStorage.getItem("authToken");
      const res = await axios.post("http://localhost:8080/api/board/save", postRequestDto, {
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        withCredentials: true, // 쿠키 기반 인증을 쓴다면
      });

      console.log("✅ 게시글 작성 응답:", res.data);
      alert("게시글이 작성되었습니다.");
      navigate("/community");
    } catch (err) {
      console.error("❌ 게시글 작성 실패:", err);
      alert("게시글 작성 중 오류가 발생했습니다.");
    }
  };

  const handleCancel = () => {
    if (window.confirm("작성을 취소하시겠습니까?")) {
      navigate("/community");
    }
  };

  return (
    <div className="community-write">
      {/* Same header as Community.jsx */}
      <div className="community-header-top">
        <Link to="/" className="logo-container">
          <img className="v" alt="V" src="https://c.animaapp.com/JuAZje8Q/img/--------v4@2x.png" />
          <div className="text-wrapper-89" style={{ height: "61px", lineHeight: "61px" }}>집사</div>
        </Link>
      </div>

      <div className="write-container">
        <div className="write-header">
          <h1 className="write-title">게시글 작성</h1>
          <p className="write-subtitle">자유롭게 의견을 나누어 보세요</p>
        </div>

        <div className="write-form-container">
          <form onSubmit={handleSubmit} className="write-form">
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                제목
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 입력하세요"
                className="form-input"
                maxLength={100}
              />
            </div>

            <div className="form-group">
              <label htmlFor="content" className="form-label">
                내용
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용을 입력하세요"
                className="form-textarea"
                rows={15}
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={handleCancel}>
                취소
              </button>
              <button type="submit" className="submit-btn">
                작성완료
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
