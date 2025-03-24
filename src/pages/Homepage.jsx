import React from 'react';
import '../App.css';

const Homepage = () => {
  return (
    <div className="app-container">
      <div className="navbar">
        <div className="logo">DriveSafe</div>
        <div className="nav-links">
        <a href="/">Sign Up</a>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/plans">Plans</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>

      <div className="hero">
        {/* Animate this line */}
        <h1 className="animated-text">Drive Safer. Pay Smarter.</h1>
        <p>AI-powered risk assessment that rewards your safe driving with lower premiums — monitor, improve, and protect your journey in real time.</p>
        <button className="hero-btn">Get Started</button>
      </div>

      <footer>
        <p>© 2025 DriveSafe Insurance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
