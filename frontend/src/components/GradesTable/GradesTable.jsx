import styles from "./GradesTable.module.css";
import { useContext } from "react";
import { gradesContext } from "../../views/GradesCalc";

import React from "react";

export default function GradesTable() {
  const { gradesValue, gradeSelect, gradeEdit } = useContext(gradesContext);
  const [grades, setGrades] = gradesValue;

  const [select, setSelect] = gradeSelect;
  const [edit, setEdit] = gradeEdit;

  const SelectGrade = (i) => {
    setSelect(i);
    setEdit(true);
  };
  return (
    <>
      <h3 className={styles.tableTittle}>Oceny</h3>
      <table border={1} className={styles.table}>
        <thead>
          <tr>
            <th>Ocena</th>
            <th>Procenty</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={grade.grade}>
              <td
                onDoubleClick={() => {
                  SelectGrade(index);
                }}
              >
                {grade.grade}
              </td>
              <td
                onDoubleClick={() => {
                  SelectGrade(index);
                }}
              >
                {grade.prc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <b className={styles.changeinfo}>
        Zeby zmienić procenty kliknij je 2 razy
      </b>
    </>
  );
}
