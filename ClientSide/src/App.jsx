import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Videos from "./pages/videos/Videos";
import Groups from "./pages/groups/Groups"
import Events from "./pages/events/Events"
import Job from "./pages/job/Job";

function App() {
  return (
    <>
      <Router>
          <Topbar />
          <Sidebar />
        <div className="container">
          <Routes>
            <Route excat path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/events" element={<Events />} />
            <Route path="/job" element={<Job />} />
            <Route path="/cource" element={<Job />} />
          </Routes>
        </div>
      </Router>
      {/* <FriendRequest /> */}
    </>
  );
}

export default App;
