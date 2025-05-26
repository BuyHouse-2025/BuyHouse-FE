import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { useAuth } from "../context/AuthContext";

export const UpdateMemberInfo = () => {
  const { user, setUser } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    birthday: "",
    phoneNumber: "",
    pwdQuestion: "",
    pwdAnswer: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res = await axios.get("http://localhost:8080/api/users/details", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = res.data;
        setForm({
          name: data.name,
          email: data.email,
          birthday: data.birthday,
          phoneNumber: data.phoneNumber,
          pwdQuestion: String(data.pwdQuestion ?? ""),
          pwdAnswer: data.pwdAnswer,
        });
      } catch (err) {
        console.error("❌ 사용자 정보 로딩 실패", err.response || err);
      }
    };

    fetchUserData();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((err) => ({ ...err, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "이름을 입력해주세요.";
    if (!form.email) newErrors.email = "이메일을 입력해주세요.";
    if (!form.phoneNumber) newErrors.phoneNumber = "전화번호를 입력해주세요.";
    if (!form.pwdQuestion) newErrors.pwdQuestion = "질문을 선택해주세요.";
    if (!form.pwdAnswer) newErrors.pwdAnswer = "답변을 입력해주세요.";
    return newErrors;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      const payload = {
        name: form.name,
        email: form.email,
        birthday: form.birthday, // yyyy-MM-dd 형식
        phoneNumber: form.phoneNumber,
        pwdQuestion: parseInt(form.pwdQuestion),
        pwdAnswer: form.pwdAnswer,
      };

      const res = await axios.put("http://localhost:8080/api/users", payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      const newToken = res.headers["authorization"]?.replace("Bearer ", "");
      if (newToken) {
        localStorage.setItem("authToken", newToken);
      }

      // ✅ 사용자 정보 다시 요청
      const userRes = await axios.get("http://localhost:8080/api/users", {
        headers: { Authorization: `Bearer ${newToken || token}` },
      });
      setUser(userRes.data);

      alert("회원정보가 성공적으로 수정되었습니다.");
    } catch (err) {
      console.error("❌ 회원정보 수정 실패", err.response || err);
      alert("회원정보 수정에 실패했습니다. 입력 정보를 다시 확인해주세요.");
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
          <div className="updateMemberInfo-que">이름을 입력해주세요.</div>
          <div className="input-wrapper">
            <input
              className="inputbox"
              name="name"
              type="text"
              placeholder="이름"
              value={form.name}
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.name && <p className="error">{errors.name}</p>}

        {/* 이메일 */}
        <div className="updateMemberInfo-frame3">
          <div className="updateMemberInfo-que">이메일을 입력해주세요.</div>
          <div className="input-wrapper">
            <input
              className="inputbox"
              name="email"
              type="email"
              placeholder="이메일"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.email && <p className="error">{errors.email}</p>}

        {/* 생년월일 */}
        <div className="updateMemberInfo-frame4">
          <div className="updateMemberInfo-que">생년월일을 입력해주세요.</div>
          <div className="input-wrapper">
            <input
              className="inputbox"
              name="birthday"
              type="date"
              value={form.birthday}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* 전화번호 */}
        <div className="updateMemberInfo-frame4">
          <div className="updateMemberInfo-que">전화번호를 입력해주세요.</div>
          <div className="input-wrapper">
            <input
              className="inputbox"
              name="phoneNumber"
              type="tel"
              placeholder="예: 01012345678"
              value={form.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}

        {/* 질문 & 답변 */}
        <div className="updateMemberInfo-frame4">
          <p className="updateMemberInfo-que">비밀번호 찾기 질문을 선택해주세요.</p>
          <div className="input-wrapper">
            <select
              className="inputbox"
              name="pwdQuestion"
              value={form.pwdQuestion}
              onChange={handleChange}
            >
              <option value="" disabled>비밀번호 찾기 질문</option>
              <option value="0">내가 키우는 애완동물의 이름은?</option>
              <option value="1">내가 졸업한 초등학교 이름은?</option>
              <option value="2">내가 태어난 도시는?</option>
              <option value="3">내가 가장 좋아하는 음식은?</option>
            </select>
          </div>
          {errors.pwdQuestion && <p className="error">{errors.pwdQuestion}</p>}

          <div className="input-wrapper">
            <input
              className="inputbox"
              name="pwdAnswer"
              type="text"
              placeholder="비밀번호 찾기 답변"
              value={form.pwdAnswer}
              onChange={handleChange}
            />
          </div>
          {errors.pwdAnswer && <p className="error">{errors.pwdAnswer}</p>}
        </div>
      </form>
    </div>
  );
};
