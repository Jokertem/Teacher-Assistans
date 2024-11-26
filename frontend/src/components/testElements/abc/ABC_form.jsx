import React from "react";
import styles from "./ABC.module.css";
import { useState, useEffect, useContext } from "react";

import { ABC } from "../../../classes/abc";
export default function ABC_form(props) {
  const [editElement, setEditElement] = useState(props.edit);
  const [task, setTask] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [points, setPoints] = useState("");
  const ChangeTask = (e) => {
    setTask(e.target.value);
  };
  const ChangeA = (e) => {
    setA(e.target.value);
  };
  const ChangeB = (e) => {
    setB(e.target.value);
  };
  const ChangeC = (e) => {
    setC(e.target.value);
  };
  const ChangeD = (e) => {
    setD(e.target.value);
  };
  const ChangePoints = (e) => {
    setPoints(e.target.value);
  };
  const Create = (e) => {
    e.preventDefault();
    if (
      task.trim() == "" ||
      a.trim() == "" ||
      b.trim() == "" ||
      c.trim() == "" ||
      d.trim() == "" ||
      isNaN(points) ||
      points <= 0
    ) {
      return;
    }
    const newTask = new ABC(task, a, b, c, d, points);
    props.add(newTask);
  };
  useEffect(() => {
    if (editElement && editElement.type == "ABC") {
      setTask(editElement.title);
      setA(editElement.anwsers[0]);
      setB(editElement.anwsers[1]);
      setC(editElement.anwsers[2]);
      setD(editElement.anwsers[3]);
      setPoints(editElement.points);
    }
  }, [editElement]);
  return (
    <form className="elementform" action="">
      <div>
        <label htmlFor="">Treść zadania</label>
        <input type="text" value={task} onChange={ChangeTask} />
      </div>
      <div className={styles.form__answers}>
        <div>
          <label htmlFor="">A</label>
          <input type="text" name="" id="" value={a} onChange={ChangeA} />
        </div>
        <div>
          <label htmlFor="">B</label>
          <input type="text" name="" id="" value={b} onChange={ChangeB} />
        </div>
        <div>
          <label htmlFor="">C</label>
          <input type="text" name="" id="" value={c} onChange={ChangeC} />
        </div>
        <div>
          <label htmlFor="">D</label>
          <input type="text" name="" id="" value={d} onChange={ChangeD} />
        </div>
      </div>
      <div>
        <label htmlFor="">Punkty</label>
        <input
          type="number"
          name=""
          id=""
          value={points}
          onChange={ChangePoints}
        />
      </div>
      <button id="add" onClick={Create}>
        Dodaj
      </button>
    </form>
  );
}
