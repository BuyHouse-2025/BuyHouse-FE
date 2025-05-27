"use client";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./style.css";
import axios from "axios";

export const CommunityPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isAuthor, setIsAuthor] = useState(false);
  const { user } = useAuth();
  const userName = user?.name || "사용자";
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const formatDate = (value) => {
      if (!value) return "";
      const date = new Date(value);
      return isNaN(date.getTime()) ? "" : date.toISOString().split("T")[0];
    };

    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/board/${id}`, {
          headers: {
            Accept: "application/json",
          },
          withCredentials: true,
        });

        const data = res.data;

        setPost({
          id,
          title: data.title,
          author: data.name,
          date: formatDate(data.createdDate),
          content: data.content,
          views: 0,
        });

        // const mappedComments = data.comments.map((c) => ({
        //   id: c.id,
        //   author: c.name,
        //   date: new Date(c.createdDate).toISOString().split("T")[0],
        //   content: c.content,
        // }));
        setComments(data.comments);
        console.log(data.comments);
        console.log("✅ 현재 로그인 유저:", userName);
        console.log("✅ 게시글 작성자:", data.name);

        if (userName && data.name && userName === data.name.trim()) {
          setIsAuthor(true);
        }
      } catch (err) {
        console.error("❌ 게시글 불러오기 실패", err.response || err);
      }
    };

    fetchPost();
  }, [id]);

  const handleAddComment = async () => {
    if (!newComment.trim()) {
      alert("댓글을 입력해주세요.");
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      const payload = {
        comment: newComment,
        boardId: Number(id),
        name: userName,
      };

      // ① POST 요청
      const res = await axios.post("http://localhost:8080/api/board/comments", payload, {
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        withCredentials: true,
      });

      // ② 응답 DTO
      const created = res.data;

      // ③ 날짜 처리 (createdAt 필드가 없으면 오늘로)
      const rawDate = created.createdAt;
      const formattedDate = rawDate
        ? new Date(rawDate).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0];

      // ④ comments 배열에 새 댓글 추가
      setComments((prev) => [
        ...prev,
        {
          id: created.id,
          author: created.authorName || created.author,
          date: formattedDate,
          content: created.comment,
        },
      ]);

      // ⑤ 입력창 초기화
      setNewComment("");
    } catch (err) {
      console.error("❌ 댓글 작성 실패:", err.response?.data || err);
      alert("댓글 작성 중 오류가 발생했습니다.");
    }
  };

  const handleBack = () => {
    navigate("/community");
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleEditDetail = async () => {
    if (!window.confirm("이 게시글을 수정하시겠습니까?")) return;

    try {
      const token = localStorage.getItem("authToken");
      const postRequestDto = {
        title: post.title,
        content: post.content,
      };

      await axios.put(`http://localhost:8080/api/board/${id}`, postRequestDto, {
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        withCredentials: true,
      });

      alert("게시글이 수정되었습니다.");
      navigate("/community");
    } catch (err) {
      console.error("❌ 게시글 수정 실패:", err);
      alert("수정에 실패했습니다: " + (err.response?.data || err.message));
    }
  };

  // 게시글 삭제 (DELETE /api/board/{id})
  const handleDelete = async () => {
    if (!window.confirm("정말로 삭제하시겠습니까?")) return;

    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.delete(`http://localhost:8080/api/board/${id}`, {
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        withCredentials: true,
      });

      console.log("✅ 게시글 삭제 응답:", res.data);
      alert("게시글이 삭제되었습니다.");
      navigate("/community");
    } catch (err) {
      console.error("❌ 게시글 삭제 실패:", err.response || err);
      alert("삭제에 실패했습니다: " + (err.response?.data || err.message));
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!window.confirm("정말 이 댓글을 삭제하시겠습니까?")) return;

    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(`http://localhost:8080/api/board/comments/${commentId}`, {
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        withCredentials: true,
      });
      // 삭제 성공하면 state 에서 필터링
      setComments((prev) => prev.filter((c) => c.id !== commentId));
    } catch (err) {
      console.error("❌ 댓글 삭제 실패:", err.response?.data || err);
      alert("댓글 삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="community-post">
      <div className="community-header-top">
        <Link to="/" className="logo-container">
          <img className="v" alt="V" src="https://c.animaapp.com/JuAZje8Q/img/--------v4@2x.png" />
          <div className="text-wrapper-89" style={{ height: "61px", lineHeight: "61px" }}>
            집사
          </div>
        </Link>
      </div>

      <div className="post-container">
        <div className="post-header">
          <button className="back-btn" onClick={handleBack}>
            ← 목록으로
          </button>

          <div className="post-info">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="post-author">{post.author}</span>
              <span className="post-date">{post.date}</span>
              <span className="post-views">조회 {post.views}</span>
            </div>
          </div>

          {isAuthor && (
            <>
              <button className="edit-btn" onClick={() => navigate(`/community/edit/${id}`)}>
                수정
              </button>
              <button className="delete-btn" onClick={handleDelete}>
                삭제
              </button>
            </>
          )}
        </div>

        {/* 본문 */}
        <div className="post-content">
          <div className="content-body">
            {(post.content || "").split("\n").map((line, idx) => (
              <p key={`line-${idx}`}>{line}</p>
            ))}
          </div>
        </div>

        <div className="comments-section">
          <h3 className="comments-title">댓글 ({comments.length})</h3>

          <div className="comment-write">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="댓글을 입력하세요..."
              className="comment-input"
            />
            <button className="comment-submit" onClick={handleAddComment}>
              댓글 작성
            </button>
          </div>

          <div className="comments-list">
            {comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-header">
                  <span className="comment-author">{comment.name}</span>
                  <span className="comment-date">{new Date(comment.createdDate).toISOString().split("T")[0]}</span>
                  {/* 삭제 버튼 */}
                  {userName === comment.name && (
                    <button className="comment-delete-btn" onClick={() => handleDeleteComment(comment.id)}>
                      삭제
                    </button>
                  )}
                </div>
                <div className="comment-content">{comment.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
