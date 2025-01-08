import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/LinkedIn/Navbar.jsx";
import HomePage from "./components/LinkedIn/HomePage.jsx";
import Notification from "./components/LinkedIn/Notification.jsx";
import Jobs from "./components/LinkedIn/Jobs.jsx"

import profileImg from "/src/assets/images/Prasanna.jpg";

function App() {
  return (
    <Router>
        <Navbar profileSrc={profileImg} />
        <div className="mt-[80px] bg-[#e8e8e8] border border-1 border-[#e8e8e8]">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/notifications" element={<Notification profileSrc={profileImg} />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;