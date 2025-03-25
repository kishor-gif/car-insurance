import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import LoginPage from "./pages/loginpage.jsx";
import Details from "./pages/Details.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default App;

