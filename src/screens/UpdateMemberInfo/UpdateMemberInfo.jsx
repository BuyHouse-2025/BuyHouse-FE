// File: src/screens/ScreenWrapper/ScreenWrapper.jsx
import React, { useState } from "react";
import "./style.css";

export const UpdateMemberInfo = () => {
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    birth: "",
    question: "",
    answer: "",
  });
  const [errors, setErrors] = useState({});

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((err) => ({ ...err, [name]: "" }));
    }
  };

  // 검증 로직
  const validate = () => {
    const newErrors = {};
    if (!form.displayName) newErrors.displayName = "이름을 입력해주세요.";
    if (!form.email) newErrors.email = "이메일을 입력해주세요.";
    if (!form.question) newErrors.question = "질문을 선택해주세요.";
    if (!form.answer) newErrors.answer = "답변을 입력해주세요.";
    return newErrors;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      console.log("회원정보 수정 폼:", form);
      alert("회원정보가 저장되었습니다.");
      // 필요시 초기화
      // setForm({ displayName: "", email: "", birth: "", question: "", answer: "" });
      // setErrors({});
    }
  };

  return (
    <div className="updateMemberInfo" data-model-id="1:732">
      <div className="updateMemberInfo-form">
        <div className="updateMemberInfo-frame">
          <div className="title">회원정보 수정</div>
          <button className="button" onClick={handleSave}>
            저장
          </button>
        </div>
      </div>

      <form onSubmit={handleSave}>
        {/* 이름 */}
        <div className="updateMemberInfo-frame2">
          <div className="updateMemberInfo-que">집사에서 사용할 이름을 정해주세요.</div>
          <div className="input">
            <input
              className="inputbox"
              name="displayName"
              type="text"
              placeholder="이름을 입력하세요"
              value={form.displayName}
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.displayName && <p className="error">{errors.displayName}</p>}

        {/* 이메일 */}
        <div className="updateMemberInfo-frame3">
          <div className="updateMemberInfo-que">이메일을 입력해주세요.</div>
          <div className="fream3-view">
            <div className="input2">
              <input
                className="inputbox2"
                name="email"
                type="email"
                placeholder="이메일을 입력하세요"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {errors.email && <p className="error">{errors.email}</p>}

        {/* 생년월일 */}
        <div className="updateMemberInfo-frame4">
          <div className="updateMemberInfo-que">생년월일을 입력해주세요.</div>
          <div className="frame4-view">
            <div className="input3">
              <input className="inputbox2" name="birth" type="date" value={form.birth} onChange={handleChange} />
            </div>
          </div>
        </div>
        {errors.birth && <p className="error">{errors.birth}</p>}

        {/* 질문 & 답변 */}
        <div className="updateMemberInfo-frame4">
          <p className="updateMemberInfo-que">비밀번호 찾기 질문을 입력해 주세요.</p>
          <div className="frame4-frame">
            <div className="frame4-view2">
              <div className="input4">
                <select className="inputbox4" name="question" value={form.question} onChange={handleChange}>
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

            <div className="frame4-view3">
              <div className="input5">
                <input
                  className="inputbox2"
                  name="answer"
                  type="text"
                  placeholder="비밀번호 찾기 답변"
                  value={form.answer}
                  onChange={handleChange}
                />
              </div>
              {errors.answer && <p className="error">{errors.answer}</p>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
