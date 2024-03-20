// LoginPage.js
import React from 'react';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  return (
    <div className="login-container">
      <header>
        <h1>LOGIN</h1>
      </header>
      <form className="login-form">
        <div className="form-group">
        <i className="fas fa-envelope"></i>
          <input type="email" id="email" name="email" placeholder="Email" />

        </div>
        <div className="form-group">
        <i className="fas fa-lock"></i>
          <input type="password" id="password" name="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <div className="form-group">
          <a href="/" className="forgot-password">Forgotten password?</a>
        </div>
        <button type="submit" className="login-btn">Sign In</button>
      </form>
      <div className="register-link">
        <p>Don't have an account? <a href="/RegistrationPage">Register</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
