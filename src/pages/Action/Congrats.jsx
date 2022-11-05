import React from "react";
import "./Action.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
const Congrats = () => {
    const navigate = useNavigate();
  return (
    <div className="action-page">
      <Navbar />
      <div className="action-card">
        <FaCheck className="icon"/>
        <h2>Congratulations!</h2>
        <p className="">
          You've earned points for your participation! Keep Up the great work!
        </p>
        <button
          onClick={() => {
            navigate("../../mypoints");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Congrats;
