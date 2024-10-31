import styles from "./Calculator.module.css";
import { useState, useContext } from "react";
import { gradesContext } from "../../views/GradesCalc";
import React from "react";

export default function Calculator() {
  const { gradesValue } = useContext(gradesContext);
  const [grades, setGrades] = gradesValue;
  const [points, setPoints] = useState();
  const [max, setMax] = useState();
  const [percents, setPercetns] = useState("Procenty:");
  const [grade, setGrade] = useState("Ocena:");

  const ChangePoints = (e) => {
    setPoints(Number(e.target.value));
  };
  const ChangeMax = (e) => {
    setMax(Number(e.target.value));
  };
  const Calculate = (e) => {
    e.preventDefault();
    if (
      max < 1 ||
      points < 0 ||
      max == undefined ||
      points == undefined ||
      max < points ||
      max == "" ||
      points == ""
    ) {
      alert("Błedne Wartości");
      return;
    }
    setPercetns(`Procenty: ${Math.round((points * 100) / max)}`);
    const updatePercents = Math.round((points * 100) / max);

    if (updatePercents >= grades[0].prc) {
      setGrade(`Ocena: ${grades[0].grade}`);
      return;
    } else if (updatePercents < grades[grades.length - 1].prc) {
      setGrade(`Ocena: ${1}`);
      return;
    }
    for (let index = 0; index <= grades.length - 1; index++) {
      const element = grades[index];
      if (index == 0) {
        continue;
      }
      if (
        updatePercents >= element.prc &&
        updatePercents < grades[(index -= 1)].prc
      ) {
        setGrade(`Ocena: ${element.grade}`);
        break;
      } else {
        continue;
      }
    }
  };

  return (
    <>
      <h3 className={styles.h3}>Kalkulator</h3>
      <form action="">
        <div className={styles.calc}>
          <input type="number" placeholder="MAX" onChange={ChangeMax} />
          <input type="number" placeholder="Punkty" onChange={ChangePoints} />
          <div>
            <b>{percents}</b>
            <b>{grade}</b>
          </div>
          <button onClick={Calculate}>Oblicz</button>
        </div>
      </form>
    </>
  );
}
