import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (token) => {
    localStorage.setItem("authToken", token);
    setIsLoggedIn(true);
    try {
      const res = await fetch("http://localhost:8080/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUser(data); // 여기서 설정됨
    } catch (e) {
      console.error("사용자 정보 가져오기 실패", e);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) login(token);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
