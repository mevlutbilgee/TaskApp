import React, { useEffect } from "react";
import "./Action.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { TestCaseContext } from "../../context/testcasecontext";
import {  useContext } from "react";

const View = () => {
  const { completed, setcompleted , job , setjob} = useContext(TestCaseContext);
    const navigate = useNavigate();
    const location = useLocation();
    const newTask = location.state
    const {image, task, desc, point } = newTask;
    console.log(newTask);

    useEffect(() => {
      setcompleted([...completed,newTask])
      setjob(job.filter((item) => item.id !== newTask.id));      
    },[])    
    // console.log(completed)
  return (
    <div className="action-page">
      <Navbar />
      <div className="action-card">
        <img  className="img-action-page" src={image} alt="" />
        <p className="point">+ {point}</p>
        <h2>{task}</h2>
        <p>{desc}</p>
        <button onClick={() => navigate("/congrats")}>Earn points</button>
      </div>
    </div>
  );
};

export default View;
