import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/About.css"


const Home = () => {
  const [RoomCode, setRoomCode] = useState("");

  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  }

  return (
    <>
    <Navbar />

    <div className="hero">
      <div className="hero-left">
        <h1><span className="special-text">VideoBuddy</span></h1>
        <p>is a simple and easy to use one to one video call and chat website. You just need to enter any random room code and share the same with your friend and guess what you are into a video call.</p>
        <p>It provides high quality video rendering and all modern video call features like side by side screen and sharing your screen.</p>
      </div>
      
      
      <div className="hero-right">
        <img src="/about-img.png" alt="about_image" />
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Home;
