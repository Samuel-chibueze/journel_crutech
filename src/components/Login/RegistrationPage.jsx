// RegistrationPage.js
import React from 'react';
import './RegistrationPage.css'; // Import the CSS file for styling

const RegistrationPage = () => {
  return (
    <div className="registration-container">
      <header>
        <h1>REGISTER/SIGN UP</h1>
      </header>
      <form className="registration-form">
        <div className="form-group">
          <input type="text" id="fullName" name="fullName" placeholder="Full Name" />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" id="password" name="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
        </div>
        <button type="submit" className="register-btn">Register</button>
      </form>
      <div className="login-link">
        <p>Already have an account? <a href="/LoginPage">Login</a></p>
      </div>
    </div>
  );
};

export default RegistrationPage;
