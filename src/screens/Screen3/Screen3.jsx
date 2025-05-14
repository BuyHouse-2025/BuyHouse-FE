import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

export const Screen3 = () => {
  const navigate = useNavigate();

  // 1) form state와 errors state
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    name: "",
    birth: "",
    phone: "",
    question: "",
    answer: "",
  });
  const [errors, setErrors] = useState({});

  // 2) handleChange: 값 변경 + 실시간 에러 클리어
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // 3) validate: 필수 체크 + 비밀번호 확인일치
  const validate = () => {
    const newErrors = {};
    if (!form.username) newErrors.username = "아이디를 입력해주세요";
    if (!form.password) newErrors.password = "비밀번호를 입력해주세요";
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = "비밀번호가 일치하지 않습니다";
    if (!form.confirmPassword) newErrors.confirmPassword = "비밀번호 확인을 입력해주세요";
    if (!form.email) newErrors.email = "이메일을 입력해주세요";
    if (!form.name) newErrors.name = "이름을 입력해주세요";
    if (!form.birth) newErrors.birth = "생년월일을 입력해주세요";
    if (!form.phone) newErrors.phone = "전화번호를 입력해주세요";
    if (!form.question) newErrors.question = "질문을 선택해주세요";
    if (!form.answer) newErrors.answer = "답변을 입력해주세요";
    return newErrors;
  };

  // 4) handleSubmit: validate 후 에러가 없으면 다음 동작
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("폼 데이터:", form);
      // 예: navigate("/view5", { state: form });
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
              {/* 아이디 */}
              <div className="frame-84">
                <img className="image-9" alt="아이디" src="https://c.animaapp.com/JuAZje8Q/img/image-4@2x.png" />
                <div className="input-3">
                  <input
                    className="container-22"
                    name="username"
                    placeholder="아이디"
                    value={form.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errors.username && <p className="error">{errors.username}</p>}

              {/* 비밀번호 */}
              <div className="frame-85">
                <img className="image-9" alt="비밀번호" src="https://c.animaapp.com/JuAZje8Q/img/image-2@2x.png" />
                <div className="input-3">
                  <input
                    className="container-22"
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errors.password && <p className="error">{errors.password}</p>}

              {/* 비밀번호 확인 */}
              <div className="frame-85">
                <img className="image-9" alt="비밀번호 확인" src="https://c.animaapp.com/JuAZje8Q/img/image-2@2x.png" />
                <div className="input-3">
                  <input
                    className="container-22"
                    type="password"
                    name="confirmPassword"
                    placeholder="비밀번호 확인"
                    value={form.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

              {/* 이메일 */}
              <div className="frame-85">
                <img className="image-9" alt="이메일" src="https://c.animaapp.com/JuAZje8Q/img/image-3@2x.png" />
                <div className="input-3">
                  <input
                    className="container-22"
                    name="email"
                    placeholder="이메일주소"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errors.email && <p className="error">{errors.email}</p>}

              {/* 이름 */}
              <div className="frame-85">
                <img className="image-9" alt="이름" src="https://c.animaapp.com/JuAZje8Q/img/image-4@2x.png" />
                <div className="input-3">
                  <input
                    className="container-22"
                    name="name"
                    placeholder="이름"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errors.name && <p className="error">{errors.name}</p>}

              {/* 생년월일 */}
              <div className="frame-85">
                <img className="image-9" alt="생년월일" src="https://c.animaapp.com/JuAZje8Q/img/image-5@2x.png" />
                <div className="input-3">
                  <input className="container-22" type="date" name="birth" value={form.birth} onChange={handleChange} />
                </div>
              </div>
              {errors.birth && <p className="error">{errors.birth}</p>}

              {/* 휴대전화 */}
              <div className="frame-86">
                <img className="image-9" alt="휴대전화" src="https://c.animaapp.com/JuAZje8Q/img/image-6@2x.png" />
                <div className="input-3">
                  <input
                    className="container-23"
                    type="tel"
                    name="phone"
                    placeholder="휴대전화번호"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errors.phone && <p className="error">{errors.phone}</p>}

              {/* 질문 */}
              <div className="frame-84">
                <div className="input-4">
                  <select className="container-24" name="question" value={form.question} onChange={handleChange}>
                    <option value="" disabled>
                      비밀번호 찾기 질문
                    </option>
                    <option value="pet">내가 키우는 애완동물의 이름은?</option>
                    <option value="school">내가 졸업한 초등학교 이름은?</option>
                    <option value="city">내가 태어난 도시는?</option>
                    <option value="food">내가 가장 좋아하는 음식은?</option>
                  </select>
                </div>
              </div>
              {errors.question && <p className="error">{errors.question}</p>}

              {/* 답변 */}
              <div className="frame-87">
                <div className="input-5">
                  <input
                    className="container-25"
                    name="answer"
                    placeholder="답변"
                    value={form.answer}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errors.answer && <p className="error">{errors.answer}</p>}

              {/* 회원가입 버튼 */}
              <button type="submit" className="view-5">
                <div className="text-wrapper-108">회원가입</div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
