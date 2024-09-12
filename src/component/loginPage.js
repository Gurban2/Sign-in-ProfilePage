import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = savedUsers.find(user => user.userName === userName && user.password === password);

    if (user) {
      // Устанавливаем текущего пользователя в localStorage
      localStorage.setItem("currentUser", JSON.stringify(user));

      // Перенаправляем на страницу профиля
      navigate("/profile");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={login}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={userName}
          onChange={({ target: { value } }) => setUserName(value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
