import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from "./Components/Login";
import './index.css';
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route   path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
