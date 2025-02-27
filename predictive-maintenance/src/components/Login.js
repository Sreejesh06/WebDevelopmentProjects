import React, { useState } from "react";
import "../styles/Login.css";

const Login = ({ onLogin, onCreateAccount, onForgotPassword }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div className="login-links">
          <button type="button" onClick={onCreateAccount}>Create Account</button>
          <button type="button" onClick={onForgotPassword}>Forgot Password</button>
        </div>
      </form>
    </div>
  );
};

export default Login;