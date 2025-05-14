import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const FindPwd = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    name: "",
    birth: "",
    phone: "",
    question: "",
    answer: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // 입력 중에 에러가 있으면 실시간으로 지워주려면:
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.username) newErrors.username = "아이디를 입력해주세요";
    if (!form.email) newErrors.email = "이메일을 입력해주세요";
    if (!form.name) newErrors.name = "이름을 입력해주세요";
    if (!form.birth) newErrors.birth = "생년월일을 입력해주세요";
    if (!form.phone) newErrors.phone = "전화번호를 입력해주세요";
    if (!form.question) newErrors.question = "질문을 선택해주세요";
    if (!form.answer) newErrors.answer = "답변을 입력해주세요";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("폼 제출됨:", form);
      alert("비밀번호 찾기 요청 완료");
    }
  };

  return (
    <div className="findPwd" data-model-id="1:661">
      <form onSubmit={handleSubmit}>
        <div className="findPwd-form">
          <Link className="findPwd-frame" to="/">
            <img className="findPwd-logo" alt="Logo" src="https://c.animaapp.com/DSoZdjN8/img/--------v4-1@2x.png" />
            <div className="findPwd-jibsa">집사</div>
          </Link>

          <div className="findPwd-frame1">
            <div className="findPwd-frame2">
              <div className="findPwd-frame3">
                {/* 아이디 */}
                <div className="findPwd-id-frame">
                  <div className="findPwd-id">
                    <img className="image" alt="아이디" src="https://c.animaapp.com/DSoZdjN8/img/image-6@2x.png" />
                    <div className="input">
                      <input
                        className="inputbox"
                        name="username"
                        placeholder="아이디"
                        value={form.username}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                {errors.username && <p className="error">{errors.username}</p>}

                {/* 이메일 */}
                <div className="findPwd-id-frame2">
                  <img className="image" alt="이메일" src="https://c.animaapp.com/DSoZdjN8/img/image-5@2x.png" />
                  <div className="input2">
                    <input
                      className="inputbox2"
                      name="email"
                      placeholder="이메일주소"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {errors.email && <p className="error">{errors.email}</p>}

                {/* 이름 */}
                <div className="findPwd-id-frame2">
                  <img className="image" alt="이름" src="https://c.animaapp.com/DSoZdjN8/img/image-6@2x.png" />
                  <div className="input2">
                    <input
                      className="inputbox3"
                      name="name"
                      placeholder="이름"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {errors.name && <p className="error">{errors.name}</p>}

                {/* 생년월일 */}
                <div className="findPwd-id-frame2">
                  <img className="image" alt="생년월일" src="https://c.animaapp.com/DSoZdjN8/img/image-7@2x.png" />
                  <div className="input3">
                    <input className="inputbox4" name="birth" type="date" value={form.birth} onChange={handleChange} />
                  </div>
                </div>
                {errors.birth && <p className="error">{errors.birth}</p>}

                {/* 전화번호 */}
                <div className="findPwd-id-frame3">
                  <img className="image" alt="전화번호" src="https://c.animaapp.com/DSoZdjN8/img/image-8@2x.png" />
                  <div className="input3">
                    <input
                      className="inputbox5"
                      name="phone"
                      type="tel"
                      placeholder="휴대전화번호"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {errors.phone && <p className="error">{errors.phone}</p>}

                {/* 질문 */}
                <div className="findPwd-id-frame2">
                  <div className="input2">
                    <select name="question" className="inputbox2" value={form.question} onChange={handleChange}>
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
                <div className="findPwd-id-frame4">
                  <div className="input4">
                    <input
                      className="inputbox6"
                      name="answer"
                      placeholder="답변"
                      value={form.answer}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {errors.answer && <p className="error">{errors.answer}</p>}

                <button type="submit" className="button">
                  <div className="buttonbox">비밀번호 찾기</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
