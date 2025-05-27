"use client"

import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./style.css"
import axios from "axios"

export const Community = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const fetchPosts = async (pageNumber = 0) => {
    try {
      const res = await axios.get(`http://localhost:8080/api/board?page=${pageNumber}&size=10`)
      const { content = [], totalPages } = res.data

      const mappedPosts = content.map((post) => ({
        id: post.id,
        title: post.title,
        author: post.name,
        date: new Date(post.createdDate).toISOString().slice(0, 10),
        content: "",
        views: 0,
      }))

      setPosts(mappedPosts)
      setTotalPages(totalPages)
      setPage(pageNumber)
    } catch (err) {
      console.error("❌ 게시글 로딩 실패:", err)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const filteredPosts = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handlePostClick = (postId) => {
    navigate(`/community/post/${postId}`)
  }

  const handleWritePost = () => {
    navigate("/community/write")
  }

  return (
    <div className="community">
      <div className="community-header-top">
        <Link to="/" className="logo-container">
          <img className="v" alt="V" src="https://c.animaapp.com/JuAZje8Q/img/--------v4@2x.png" />
          <div className="text-wrapper-89" style={{ height: "61px", lineHeight: "61px" }}>집사</div>
        </Link>
      </div>

      <div className="community-container">
        <div className="community-header">
          <h1 className="community-title">자유게시판</h1>
          <div className="community-subtitle">부동산 투자와 관련된 자유로운 커뮤니티</div>
        </div>

        <div className="search-section">
          <div className="search-container">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="글 제목 검색"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <button className="write-btn" onClick={handleWritePost}>
              글쓰기
            </button>
          </div>
        </div>

        <div className="community-content">
          <div className="posts-table">
            <div className="table-header">
              <div className="col-no">No</div>
              <div className="col-title">제목</div>
              <div className="col-author">작성자</div>
              <div className="col-date">작성일</div>
            </div>

            <div className="table-body">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id ?? `${post.id}-${post.title}`}
                  className="table-row"
                  onClick={() => handlePostClick(post.id)}
                >
                  <div className="col-no">{filteredPosts.length - index}</div>
                  <div className="col-title">
                    <span className="post-title-main">{post.title || "제목 없음"}</span>
                  </div>
                  <div className="col-author">{post.author}</div>
                  <div className="col-date">{post.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <span
              key={`page-${i}`}
              className={`page-number ${page === i ? "active" : ""}`}
              onClick={() => fetchPosts(i)}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
