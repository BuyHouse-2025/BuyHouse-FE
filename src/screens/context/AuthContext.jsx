import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // ✅ 사용자 정보 상태 추가

  const login = async (token) => {
    localStorage.setItem("authToken", token);
    setIsLoggedIn(true);

    // ✅ 로그인 직후 사용자 정보 요청
    try {
      const res = await fetch("http://localhost:8080/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUser(data);
    } catch (e) {
      console.error("사용자 정보 가져오기 실패", e);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setUser(null); // 사용자 정보 초기화
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      login(token); // 앱 시작 시 자동 로그인
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
