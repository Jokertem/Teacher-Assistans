import React from "react";
import Paga_Name from "../components/page_name/Paga_Name";
import { useState, useContext } from "react";

export default function GradesCalc() {
  const [grades, SetGrades] = useState();
  return (
    <>
      <Paga_Name name={"Kalkulator Ocen"} />
    </>
  );
}
