import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios"; 


export const FindPwd = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: "",
    email: "",
    name: "",
    birthday: "",
    phoneNumber: "",
    pweQuestion: "",
    pwdAnswer: "",
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
    if (!form.id) newErrors.id = "아이디를 입력해주세요";
    if (!form.email) newErrors.email = "이메일을 입력해주세요";
    if (!form.name) newErrors.name = "이름을 입력해주세요";
    if (!form.birthday) newErrors.birthday = "생년월일을 입력해주세요";
    if (!form.phoneNumber) newErrors.phophoneNumberne = "전화번호를 입력해주세요";
    if (!form.pwdQuestion) newErrors.pwdQuestionquestion = "질문을 선택해주세요";
    if (!form.pwdAnswer) newErrors.pwdAnswer = "답변을 입력해주세요";
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
      const payload = {
      id: form.id,
      email: form.email,
      name: form.name,
      birthday: form.birthday,
      phoneNumber: form.phoneNumber,
      pwdQuestion: parseInt(form.pwdQuestion),
      pwdAnswer: form.pwdAnswer,
    };

      const res = await axios.post("http://localhost:8080/api/users/recovery/password", payload, {
        headers: { "Content-Type": "application/json" },
      });

      alert("비밀번호 찾기 요청이 완료되었습니다.");
      console.log("✅ 서버 응답:", res.data);
      navigate("/");  
    } catch (err) {
      console.error("❌ 비밀번호 찾기 실패", err.response || err);
      alert("입력 정보를 다시 확인해주세요.");
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
                        name="id"
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
                    <input className="inputbox4" name="birthday" type="date" value={form.birth} onChange={handleChange} />
                  </div>
                </div>
                {errors.birth && <p className="error">{errors.birth}</p>}

                {/* 전화번호 */}
                <div className="findPwd-id-frame3">
                  <img className="image" alt="전화번호" src="https://c.animaapp.com/DSoZdjN8/img/image-8@2x.png" />
                  <div className="input3">
                    <input
                      className="inputbox5"
                      name="phoneNumber"
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
                    <select name="pwdQuestion" className="inputbox2" value={form.question} onChange={handleChange}>
                      <option value="" disabled>
                        비밀번호 찾기 질문
                      </option>
                      <option value="0">내가 키우는 애완동물의 이름은?</option>
                      <option value="1">내가 졸업한 초등학교 이름은?</option>
                      <option value="2">내가 태어난 도시는?</option>
                      <option value="3">내가 가장 좋아하는 음식은?</option>
                    </select>
                  </div>
                </div>
                {errors.question && <p className="error">{errors.question}</p>}

                {/* 답변 */}
                <div className="findPwd-id-frame4">
                  <div className="input4">
                    <input
                      className="inputbox6"
                      name="pwdAnswer"
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
