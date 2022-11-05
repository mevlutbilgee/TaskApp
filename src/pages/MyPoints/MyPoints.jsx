import React, {useContext} from "react";
import "./MyPoints.scss"
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { TestCaseContext } from "../../context/testcasecontext";
import Card from "../Home/Card";


const MyPoints = () => {
  const { completed  } = useContext(TestCaseContext); 
  const navigate = useNavigate();
  return (
    <div className="mypoint-page">
      <Navbar />
      <div className="mypoint-title">
        <h2>Completed actions</h2>
        <button
          className="turn-btn"
          onClick={() => {
            navigate("../../home");
          }}
        >
          Tasks
        </button>
      </div>
      <div>
        {completed.map((item, index) => (
          <div>
            <Card {...item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPoints;
