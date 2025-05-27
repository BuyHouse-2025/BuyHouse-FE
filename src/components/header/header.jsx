// components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="header-logo" to="/">
        <img
          className="header-logo-image"
          alt="집사 로고"
          src="https://c.animaapp.com/JuAZje8Q/img/--------v4-2@2x.png"
        />
        <div className="header-text">집사</div>
      </Link>
    </div>
  );
};

export default Header;