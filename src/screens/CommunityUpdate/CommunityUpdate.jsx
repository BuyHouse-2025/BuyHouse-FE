"use client";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import "./style.css";

export const CommunityUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // ① 기존 글 불러와서 초기값 세팅
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res = await axios.get(`http://localhost:8080/api/board/${id}`, {
          headers: {
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          withCredentials: true,
        });
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (err) {
        console.error("❌ 수정할 게시글 불러오기 실패", err);
        alert("게시글을 불러오는 중 오류가 발생했습니다.");
        navigate("/community");
      }
    };
    fetchPost();
  }, [id, navigate]);

  // ② 제출 핸들러: 반드시 PUT 요청을 보내고 응답이 와야 navigate
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      return alert("제목과 내용을 모두 입력해주세요.");
    }

    try {
      const token = localStorage.getItem("authToken");
      await axios.put(
        `http://localhost:8080/api/board/${id}`,
        { title, content },
        {
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          withCredentials: true,
        }
      );
      alert("게시글이 성공적으로 수정되었습니다.");
      navigate(`/community/post/${id}`); // 수정 후 상세 페이지로 돌아가기
    } catch (err) {
      console.error("❌ 게시글 수정 실패", err.response || err);
      alert("수정 중 오류가 발생했습니다: " + (err.response?.data || err.message));
    }
  };

  const handleCancel = () => {
    if (window.confirm("정말 수정 작업을 취소하시겠습니까?")) {
      navigate(-1);
    }
  };

  return (
    <div className="community-write">
      <div className="community-header-top">
        <Link to="/" className="logo-container">
          <div className="logo-icon">🏠</div>
          <span className="logo-text">집사</span>
        </Link>
      </div>

      <div className="write-container">
        <div className="write-header">
          <h1 className="write-title">게시글 수정</h1>
          <p className="write-subtitle">수정할 내용을 편집하세요</p>
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
                수정완료
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
