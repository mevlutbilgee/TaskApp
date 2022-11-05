import React, { useContext } from "react";
import "./Home.scss"
import Navbar from "../../components/Navbar/Navbar";
import { tasks } from "../../helper/tasks";
import Card from "./Card";
import { useState } from "react";
import { TestCaseContext } from "../../context/testcasecontext";


const Home = () => {
  const {job} = useContext(TestCaseContext)
  return (
    <div className="home-page">
      <Navbar />

      <h2>Action to be completed</h2>
      <div className="task-card">
        {job.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
