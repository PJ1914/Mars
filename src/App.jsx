// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/aboutUs";
import Partner from "./components/Partner";
import Navbar from "./components/home/Navbar";
import Img1 from "./assets/Home/Mask group.png";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <img src={Img1} alt="" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
