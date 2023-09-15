import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Home.css"

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
        <h1>Welcome to <span className="special-text">VideoBuddy</span></h1>
        <p>A one to one video-call and chat website</p>
      </div>
      
      
      <div className="hero-right">
        <form action="" onSubmit={submitCode} className="main-form">
          <label htmlFor="">Enter The Room Code</label>
          <input
            type="text"
            required
            placeholder="Enter Room Code"
            value={RoomCode}
            onChange={(e) => {
              setRoomCode(e.target.value);
            }}
          />
          <button type="submit">Enter Room</button>
        </form>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Home;
