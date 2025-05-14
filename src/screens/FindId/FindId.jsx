import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const FindId = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    birth: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "이메일을 입력해주세요";
    if (!form.name) newErrors.name = "이름을 입력해주세요";
    if (!form.birth) newErrors.birth = "생년월일을 입력해주세요";
    if (!form.phone) newErrors.phone = "휴대전화번호를 입력해주세요";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("제출된 폼:", form);
      alert("아이디 찾기 요청이 완료되었습니다.");
    }
  };

  return (
    <div className="findId-screen" data-model-id="1:611">
      <div className="findId-frame">
        <Link className="banner" to="/">
          <img className="logo" alt="V" src="https://c.animaapp.com/DSoZdjN8/img/--------v4-1@2x.png" />
          <div className="jipsa">집사</div>
        </Link>

        <form className="findId-form" onSubmit={handleSubmit}>
          <div className="findId-input-frame">
            {/* 이메일 */}
            <div className="findId-email">
              <div className="findId-input">
                <input
                  className="findId-inputbox"
                  name="email"
                  placeholder="이메일주소"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <img className="findId-icon" alt="이메일" src="https://c.animaapp.com/DSoZdjN8/img/image@2x.png" />
            </div>
            {errors.email && <p className="error">{errors.email}</p>}

            {/* 이름 */}
            <div className="findId-name">
              <div className="findId-input">
                <input
                  className="findId-inputbox"
                  name="name"
                  placeholder="이름"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <img className="findId-icon" alt="이름" src="https://c.animaapp.com/DSoZdjN8/img/image-6@2x.png" />
            </div>
            {errors.name && <p className="error">{errors.name}</p>}

            {/* 생년월일 */}
            <div className="findId-bir-wrapper">
              <div className="findId-bir">
                <div className="findId-bir-input">
                  <input
                    className="findId-inputbox"
                    name="birth"
                    type="date"
                    placeholder="생년월일 8자리"
                    value={form.birth}
                    onChange={handleChange}
                  />
                </div>
                <img className="findId-icon" alt="생년월일" src="https://c.animaapp.com/DSoZdjN8/img/image-2@2x.png" />
                <div className="findId-border" />
              </div>
            </div>
            {errors.birth && <p className="error">{errors.birth}</p>}

            {/* 휴대전화 */}
            <div className="findId-phone-wrapper">
              <div className="findId-phone">
                <div className="findId-phone-input">
                  <input
                    className="phone-input"
                    name="phone"
                    type="tel"
                    placeholder="휴대전화번호"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <img className="findId-icon" alt="전화번호" src="https://c.animaapp.com/DSoZdjN8/img/image-8@2x.png" />
                <div className="findId-border-2" />
              </div>
            </div>
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <button type="submit" className="findId-button">
            <div className="findId-button-2">아이디 찾기</div>
          </button>
        </form>

        <div className="findId-footer">
          <div className="findId-footer-frame">
            <div className="findId-footer-ssafy">SSAFY</div>
            <div className="findId-footer-day">
              <div className="day">2025.05.29</div>
              <div className="vertical-divider" />
            </div>
            <div className="findId-footer-name">
              <div className="won">WON YUN SEO</div>
              <div className="vertical-divider" />
            </div>
            <div className="findId-footer-name">
              <div className="jang">JANG JONG WON</div>
              <div className="vertical-divider" />
            </div>
          </div>
          <div className="findId-footer-frame2">
            <div className="findId-footer-jibsa">집사</div>
            <div className="findId-footer-copyright">Copyright</div>
            <div className="findId-footer-corp">© BUYHOME Corp.</div>
            <div className="findId-footer-copyright">All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
