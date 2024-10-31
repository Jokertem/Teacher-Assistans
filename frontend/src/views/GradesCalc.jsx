import React from "react";
import Paga_Name from "../components/page_name/Paga_Name";
import { useState, useEffect, createContext } from "react";
import GradesTable from "../components/GradesTable/GradesTable";
import GradesChange from "../components/gradesChange/GradesChange";
import Calculator from "../components/calculator/Calculator";
export const gradesContext = createContext();

export default function GradesCalc() {
  const [edit, setEdit] = useState(false);
  const [select, setSelect] = useState();
  const [grades, setGrades] = useState([
    {
      grade: 6,
      prc: 100,
    },
    {
      grade: 5,
      prc: 90,
    },
    {
      grade: 4,
      prc: 75,
    },
    {
      grade: 3,
      prc: 50,
    },
    {
      grade: 2,
      prc: 33,
    },
  ]);
  useEffect(() => {
    localStorage.setItem("grades", JSON.stringify(grades));
  }, [grades]);
  const item = JSON.parse(localStorage.getItem("grades"));
  useEffect(() => {
    if (item) {
      setGrades(item);
    }
  }, []);
  return (
    <>
      <Paga_Name name={"Kalkulator Ocen"} />
      <gradesContext.Provider
        value={{
          gradesValue: [grades, setGrades],
          gradeSelect: [select, setSelect],
          gradeEdit: [edit, setEdit],
        }}
      >
        <GradesTable />
        {edit && <GradesChange />}
        <Calculator />
      </gradesContext.Provider>
    </>
  );
}
