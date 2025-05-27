import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

export const FindId = () => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/users/recovery/id", {
        email: form.email,
        name: form.name,
        birthday: form.birth,
        phoneNumber: form.phone,
      });

      alert("아이디 찾기 요청이 완료되었습니다.");
      console.log("✅ 서버 응답:", res.data);
      navigate("/");  
    } catch (err) {
      console.error("❌ 아이디 찾기 실패:", err.response || err);
      alert("정보를 확인해 주세요. 아이디 찾기에 실패했습니다.");
    }
  };

  return (
    <div className="findId-screen" data-model-id="1:611">
      <div className="findId-frame">
        <Header/>

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

        <Footer/>
      </div>
    </div>
  );
};
