// File: src/screens/ScreenScreen/ScreenScreen.jsx
import React, { useState } from "react";
import "./style.css";

export const UpdatePwd = () => {
  const [form, setForm] = useState({
    current: "",
    next: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.current) newErrors.current = "현재 비밀번호를 입력해주세요.";
    const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    if (!form.next) {
      newErrors.next = "새 비밀번호를 입력해주세요.";
    } else if (!pwRegex.test(form.next)) {
      newErrors.next = "8자 이상이어야 하며, 대소문자·숫자·특수문자를 모두 포함해야 합니다.";
    }
    if (!form.confirm) {
      newErrors.confirm = "비밀번호 확인을 입력해주세요.";
    } else if (form.next !== form.confirm) {
      newErrors.confirm = "비밀번호가 일치하지 않습니다.";
    }
    return newErrors;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      console.log("비밀번호 변경 요청:", form);
      alert("비밀번호가 성공적으로 변경되었습니다.");
      setForm({ current: "", next: "", confirm: "" });
      setErrors({});
    }
  };

  return (
    <div className="updatePwd" data-model-id="1:780">
      <div className="title-view">
        <div className="frame">
          <div className="input">비밀번호 변경</div>
          <button className="inputbox" onClick={handleSave}>
            저장
          </button>
        </div>
      </div>

      <form className="curpwd-view" onSubmit={handleSave}>
        {/* 현재 비밀번호 */}
        <div className="frame2">
          <label className="input2" htmlFor="current">
            현재 비밀번호를 입력해 주세요.
          </label>
          <input
            id="current"
            name="current"
            type="password"
            className="inputbox2"
            placeholder="현재 비밀번호 입력"
            value={form.current}
            onChange={handleChange}
          />
        </div>
        {errors.current && <p className="error">{errors.current}</p>}

        {/* 새 비밀번호 */}
        <div className="frame3">
          <label className="input2" htmlFor="next">
            새 비밀번호를 입력해 주세요.
          </label>
          <input
            id="next"
            name="next"
            type="password"
            className="inputbox3"
            placeholder="새 비밀번호 입력"
            value={form.next}
            onChange={handleChange}
          />
        </div>
        {errors.next ? (
          <p className="error">{errors.next}</p>
        ) : (
          <p className="hint">대소문자, 숫자, 특수문자가 1개 이상 포함되어야 합니다.</p>
        )}

        {/* 비밀번호 확인 */}
        <div className="frame2">
          <label className="input2" htmlFor="confirm">
            새 비밀번호를 확인해 주세요.
          </label>
          <input
            id="confirm"
            name="confirm"
            type="password"
            className="inputbox3"
            placeholder="새 비밀번호 재입력"
            value={form.confirm}
            onChange={handleChange}
          />
          {errors.confirm && <p className="error">{errors.confirm}</p>}
        </div>
      </form>
    </div>
  );
};
