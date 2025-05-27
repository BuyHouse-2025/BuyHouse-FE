"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import "./style.css"
import axios from "axios"

export const CommunityPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  const [isAuthor, setIsAuthor] = useState(false)
  const { user } = useAuth();
  const userName = user?.name || "사용자";

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

        const mappedComments = data.comments.map((c) => ({
          id: c.id,
          author: c.author,
          date: new Date(c.createdDate).toISOString().split("T")[0],
          content: c.content,
        }));
        setComments(mappedComments);

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


  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "현재사용자",
        date: new Date().toISOString().split("T")[0],
        content: newComment,
      }
      setComments([...comments, comment])
      setNewComment("")
    }
  }

  const handleEdit = () => {
    navigate(`/community/edit/${id}`)
  }

  const handleDelete = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      navigate("/community")
    }
  }

  const handleBack = () => {
    navigate("/community")
  }

  

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div className="community-post">
      <div className="community-header-top">
        <Link to="/" className="logo-container">
          <img className="v" alt="V" src="https://c.animaapp.com/JuAZje8Q/img/--------v4@2x.png" />
          <div className="text-wrapper-89" style={{ height: "61px", lineHeight: "61px" }}>집사</div>
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
            <div className="post-actions">
              <button className="edit-btn" onClick={handleEdit}>
                수정
              </button>
              <button className="delete-btn" onClick={handleDelete}>
                삭제
              </button>
            </div>
          )}
        </div>

        <div className="post-content">
          <div className="content-body">
            {(post.content || "").split("\n").map((line, index) => (
              <p key={index}>{line}</p>
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
                  <span className="comment-author">{comment.author}</span>
                  <span className="comment-date">{comment.date}</span>
                </div>
                <div className="comment-content">{comment.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
