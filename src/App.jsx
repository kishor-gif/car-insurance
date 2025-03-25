import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import LoginPage from "./pages/loginpage.jsx";
import Details from "./pages/Details.jsx";
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Rewards from './pages/Rewards';
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/details" element={<Details />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
