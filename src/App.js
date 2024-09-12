import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./component/loginPage";
import RegisterPage from "./component/registerPage";
import Profile from "./component/profilePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<div>
            <h2>Welcome! Please select an option:</h2>
            <nav>
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </nav>
          </div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
