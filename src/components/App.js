import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import SignUp from "./SignUp";
import Success from "./Success";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
