import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import GradesCalc from "./views/GradesCalc";

function App() {
  const projectName = "Teacher Assisants";
  return (
    <>
      <h1 className="tittle">{projectName}</h1>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/oceny" element={<GradesCalc />} />
      </Routes>
    </>
  );
}

export default App;
