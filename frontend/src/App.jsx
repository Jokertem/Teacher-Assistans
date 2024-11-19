import { useRef, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import GradesCalc from "./views/GradesCalc";
import TestGenerator from "./views/TestGenerator";
import ShortTestGenerator from "./views/ShortTestGenerator";
import { useReactToPrint } from "react-to-print";
export const PrintContext = createContext();

function App() {
  const projectName = "Teacher Assisants";

  const contentRef = useRef();
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <>
      <h1 className="tittle">{projectName}</h1>
      <PrintContext.Provider value={{ _print: [contentRef, handlePrint] }}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/oceny" element={<GradesCalc />} />
          <Route path="/sprawdziany" element={<TestGenerator />} />
          <Route path="/kartkówki" element={<ShortTestGenerator />} />
        </Routes>
      </PrintContext.Provider>
    </>
  );
}

export default App;
