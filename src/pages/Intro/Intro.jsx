import React from "react";
import "./Intro.scss";
import { useNavigate } from "react-router-dom";
const Intro = () => {
  const navigate = useNavigate();
  return (
    <div className="intro-page">
      <header>
        <h3>TestCase APP</h3>
        <p>"Pixel Perfect"</p>
      </header>
      <main>
        <img className="intro-img" src="/image.png" alt="" />
      </main>
      <footer>
        <h2>Welcome to the TestCase APP!</h2>
        <p>
          We created this exercise to gain insights about your development
          skills.
        </p>
        <button onClick={() => navigate("home")}>Start</button>
      </footer>
    </div>
  );
};

export default Intro;
