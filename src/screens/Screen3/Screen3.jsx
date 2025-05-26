import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
import Footer from "../../components/footer/footer";

export const Screen3 = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "",
    password: "",
    passwordConfirm: "",
    email: "",
    name: "",
    birthday: "",
    phoneNumber: "",
    pwdQuestion: "",
    pwdAnswer: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.id) newErrors.id = "아이디를 입력해주세요";
    if (!form.password) newErrors.password = "비밀번호를 입력해주세요";
    if (form.password !== form.passwordConfirm) newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다";
    if (!form.passwordConfirm) newErrors.passwordConfirm = "비밀번호 확인을 입력해주세요";
    if (!form.email) newErrors.email = "이메일을 입력해주세요";
    if (!form.name) newErrors.name = "이름을 입력해주세요";
    if (!form.birthday) newErrors.birthday = "생년월일을 입력해주세요";
    if (!form.phoneNumber) newErrors.phoneNumber = "전화번호를 입력해주세요";
    if (!form.pwdQuestion) newErrors.pwdQuestion = "질문을 선택해주세요";
    if (!form.pwdAnswer) newErrors.pwdAnswer = "답변을 입력해주세요";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const payload = {
          id: form.id,
          password: form.password,
          passwordConfirm: form.passwordConfirm, // ✅ 이거 안 보내서 400 떴을 가능성 높음
          email: form.email,
          name: form.name,
          birthday: form.birthday, // 'yyyy-MM-dd' 형식 유지
          phoneNumber: form.phoneNumber,
          pwdQuestion: parseInt(form.pwdQuestion), // ❗ 숫자로
          pwdAnswer: form.pwdAnswer,
        };


        await axios.post("http://localhost:8080/api/users", payload, {
          headers: { "Content-Type": "application/json" },
        });

        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      } catch (err) {
          if (err.response?.data) {
            console.error("❌ 회원가입 실패 - 서버 응답:", err.response.data);
            alert(
              Array.isArray(err.response.data)
                ? err.response.data.map((e) => e.defaultMessage || JSON.stringify(e)).join("\n")
                : "회원가입 실패"
            );
          } else {
            console.error("❌ 회원가입 실패:", err);
            alert("알 수 없는 오류 발생");
          }
        }

    }
  };

  return (
    <div className="screen-3">
      <form onSubmit={handleSubmit}>
        <div className="frame-80">
          <Link className="frame-81" to="/">
            <img className="v-2" alt="V" src="https://c.animaapp.com/JuAZje8Q/img/--------v4-2@2x.png" />
            <div className="text-wrapper-104">집사</div>
          </Link>
          <div className="frame-82">
            <div className="frame-83">
              <div className="frame-84">
                <input className="container-22" name="id" placeholder="아이디" value={form.id} onChange={handleChange} />
              </div>
              {errors.id && <p className="error">{errors.id}</p>}
              <div className="frame-85">
                <input className="container-22" type="password" name="password" placeholder="비밀번호" value={form.password} onChange={handleChange} />
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
              <div className="frame-85">
                <input className="container-22" type="password" name="passwordConfirm" placeholder="비밀번호 확인" value={form.passwordConfirm} onChange={handleChange} />
              </div>
              {errors.passwordConfirm && <p className="error">{errors.passwordConfirm}</p>}
              <div className="frame-85">
                <input className="container-22" name="email" placeholder="이메일주소" value={form.email} onChange={handleChange} />
              </div>
              {errors.email && <p className="error">{errors.email}</p>}
              <div className="frame-85">
                <input className="container-22" name="name" placeholder="이름" value={form.name} onChange={handleChange} />
              </div>
              {errors.name && <p className="error">{errors.name}</p>}
              <div className="frame-85">
                <input className="container-22" type="date" name="birthday" value={form.birthday} onChange={handleChange} />
              </div>
              {errors.birthday && <p className="error">{errors.birthday}</p>}
              <div className="frame-86">
                <input className="container-23" type="tel" name="phoneNumber" placeholder="휴대전화번호" value={form.phoneNumber} onChange={handleChange} />
              </div>
              {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
              <div className="frame-84">
                <select className="container-24" name="pwdQuestion" value={form.pwdQuestion} onChange={handleChange}>
                  <option value="" disabled>비밀번호 찾기 질문</option>
                  <option value="0">내가 키우는 애완동물의 이름은?</option>
                  <option value="1">내가 졸업한 초등학교 이름은?</option>
                  <option value="2">내가 태어난 도시는?</option>
                  <option value="3">내가 가장 좋아하는 음식은?</option>
                </select>
              </div>
              {errors.pwdQuestion && <p className="error">{errors.pwdQuestion}</p>}
              <div className="frame-87">
                <input className="container-25" name="pwdAnswer" placeholder="답변" value={form.pwdAnswer} onChange={handleChange} />
              </div>
              {errors.pwdAnswer && <p className="error">{errors.pwdAnswer}</p>}
              <button type="submit" className="view-5">
                <div className="text-wrapper-108">회원가입</div>
              </button>
            </div>
          </div>
          <Footer />
        </div>
      </form>
    </div>
  );
};
