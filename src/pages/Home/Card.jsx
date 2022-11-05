import "./Home.scss";
import {  useNavigate } from "react-router-dom";
const Card = (tasks) => {
  const navigate = useNavigate();
  // console.log(tasks);
  const {image, task, desc, point } = tasks;
  
  const handleSumbit = ()=> {
    navigate("../../view", { state: tasks });
    
  }
  return (
    <div onClick={handleSumbit} className="cards">
      <img src={image} alt="" />
      <div className="title">
        <h1>{task}</h1>
        <p>{desc}</p>
      </div>
      <div className="point-box">
        <h3>+ {point}</h3>
      </div>
    </div>
  );
};

export default Card;
