import styles from "./GradesChange.module.css";
import { useState, useEffect, useContext } from "react";
import { gradesContext } from "../../views/GradesCalc";

export default function GradesChange() {
  const { gradesValue, gradeSelect, gradeEdit } = useContext(gradesContext);
  const [grades, setGrades] = gradesValue;

  const [select, setSelect] = gradeSelect;
  const [edit, setEdit] = gradeEdit;
  const [percent, setPercent] = useState(100);
  const ChangePercent = (e) => {
    setPercent(e.target.value);
  };
  const Remove = (e) => {
    e.preventDefault();
    setEdit(false);
  };
  const Save = (e) => {
    e.preventDefault();
    const selectPercent = document.querySelector("#prc").value;
    if (selectPercent > 100 || selectPercent < 1 || isNaN(selectPercent)) {
      return;
    }

    const newGrade = grades.map((grade, index) => {
      if (index == select) {
        return {
          ...grade,
          prc: (grade.prc = selectPercent),
        };
      } else {
        return grade;
      }
    });
    setGrades(newGrade);
    setEdit(false);
  };
  useEffect(() => {
    setPercent(grades[select].prc);
  }, [select]);

  return (
    <>
      <h3 className={styles.h3}>Zmiana Oceny</h3>
      <form autoComplete="none" action="">
        <div className={styles.change}>
          <b
            className={styles.change__grade}
          >{`Ocena ${grades[select].grade}`}</b>
          <div className={styles.change__input}>
            <label htmlFor="prc">Procenty</label>
            <input
              id="prc"
              type="number"
              min={1}
              max={100}
              value={percent}
              onChange={ChangePercent}
            />
          </div>

          <button className={styles.change__save} onClick={Save}>
            Zapisz
          </button>
          <button className={styles.change__remove} onClick={Remove}>
            Odrzuć
          </button>
        </div>
      </form>
    </>
  );
}
