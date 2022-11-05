import './App.css';
import Intro from './pages/Intro/Intro';
import Home from './pages/Home/Home';
import Card from './pages/Home/Card';
import View from './pages/Action/View';
import { useState } from 'react';
import Congrats from './pages/Action/Congrats';
import MyPoints from './pages/MyPoints/MyPoints';
import { Routes, Route } from "react-router-dom";
import { TestCaseContext } from './context/testcasecontext';
import { tasks } from './helper/tasks';


function App() {
  const [completed, setcompleted] = useState([]);
  const [job, setjob] = useState(tasks);
  return (
    <div className="App">
      <TestCaseContext.Provider value={{completed,setcompleted,job,setjob}} >
      <Routes>
        <Route index element={<Intro />} />
        <Route path="home" element={<Home />} />
        <Route path="card" element={<Card />} />
        <Route path="view" element={<View />} />
        <Route path="congrats" element={<Congrats />} />
        <Route path="mypoints" element={<MyPoints />} />

      </Routes>
      </TestCaseContext.Provider>
    </div>
  );
}

export default App;
