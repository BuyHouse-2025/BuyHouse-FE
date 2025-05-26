import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-logo">SSAFY</div>

        <div className="footer-item date">
          <div className="footer-text-bold">2025.05.29</div>
          <div className="footer-divider default" />
        </div>

        <div className="footer-item name">
          <div className="footer-text">WON YUN SEO</div>
          <div className="footer-divider default" />
        </div>

        <div className="footer-item name2">
          <div className="footer-text name2">JANG JONG WON</div>
          <img
            className="footer-divider name2"
            alt="Vertical divider"
            src="https://c.animaapp.com/JuAZje8Q/img/vertical-divider@2x.png"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">집사</div>
        <div className="footer-text-light">Copyright</div>
        <div className="footer-text-dark">© BUYHOME Corp.</div>
        <div className="footer-text-light">All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
