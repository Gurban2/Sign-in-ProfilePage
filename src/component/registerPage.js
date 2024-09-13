import React from "react";
import { useLocalStorage } from "../useLocalStorage.js";
import { useNavigate } from "react-router-dom";
import "./styles/register.css";

const RegisterPage = () => {
  const fields = {
    userName: useLocalStorage("name", ""),
    email: useLocalStorage("email", ""),
    password: useLocalStorage("password", ""),
  };

  const [userName, setUserName] = fields.userName;
  const [email, setEmail] = fields.email;
  const [password, setPassword] = fields.password;

  const navigate = useNavigate();

  const register = (event) => {
    event.preventDefault();
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExists = savedUsers.some((user) => user.userName === userName);

    if (!userName || !email || !password) {
      return alert("Empty");
    } else if (isUserExists) {
      return alert("You already registered");
    } else {
      const newUser = {
        userName,
        email,
        password,
        avatarUrl: "",
        id: Date.now(),
        createdAt: new Date(),
      };
      savedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(savedUsers));

      localStorage.removeItem("currentUser");

      localStorage.setItem("currentUser", JSON.stringify(newUser));

      navigate("/login");
    }
  };

  return (
    <>
      <form onSubmit={register}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userName}
            onChange={({ target: { value } }) => {
              setUserName(value);
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={({ target: { value } }) => {
              setEmail(value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={({ target: { value } }) => {
              setPassword(value);
            }}
          />
        </label>

        <button type="submit">Register</button>
        <a href="/">Back home</a>
      </form>
    </>
  );
};

export default RegisterPage;
