import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/LinkedIn/Navbar.jsx";
import HomePage from "./components/LinkedIn/HomePage.jsx";
import Notification from "./components/LinkedIn/Notification.jsx";

import profileImg from "/src/assets/images/Prasanna.jpg";

function App() {
  return (
    <Router>
      <div className="w-full h-full bg-[#F3F2EF]">
        <Navbar profileSrc={profileImg} />
        <div className="mt-[80px]">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/notifications" element={<Notification profileSrc={profileImg} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;