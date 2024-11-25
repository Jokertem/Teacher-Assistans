import React from "react";
import { useState, useEffect } from "react";
import styles from "./True_False.module.css";
import { True_False } from "../../../classes/true-false";
export default function True_False_Form(props) {
  const [editElement, setEditElement] = useState(props.edit);
  const [task, setTask] = useState("");
  const [asks, setAsks] = useState([]);
  const [askName, setAskName] = useState("");
  const [points, setPoints] = useState("");
  const ChangeTask = (e) => {
    setTask(e.target.value);
  };
  const ChangePoints = (e) => {
    setPoints(e.target.value);
  };
  const AskChange = (e) => {
    setAskName(e.target.value);
  };
  const AddAsk = (e) => {
    e.preventDefault();
    if (askName.trim() == "") {
      return;
    }
    setAsks([...asks, askName]);
  };
  const RemoveAsk = (i) => {
    setAsks(asks.filter((ask, index) => index != i));
  };
  const Create = (e) => {
    e.preventDefault();
    if (task.trim() == "" || isNaN(points) || points <= 0 || asks.length == 0) {
      return;
    }
    const newTask = new True_False(task, asks, points);
    props.add(newTask);
  };
  useEffect(() => {
    if (editElement && editElement.type == "Prawda/Fałsz") {
      setTask(editElement.title);
      setAsks(editElement.asks);
      setPoints(editElement.points);
    }
  }, [editElement]);
  return (
    <>
      <form className="elementform" action="">
        <div>
          <label htmlFor="">Treść zadania</label>
          <input type="text" value={task} onChange={ChangeTask} />
        </div>
        <div className={styles.newAsk}>
          <textarea type="text" placeholder="Pytanie" onChange={AskChange} />
          <button onClick={AddAsk}>Dodaj</button>
        </div>
        <div>
          <ul>
            {asks.map((ask, index) => {
              return (
                <li key={ask} className={styles.list}>
                  {ask}
                  <img
                    className={styles.remove}
                    src="public/trash.png"
                    alt=""
                    onClick={() => {
                      RemoveAsk(index);
                    }}
                  />
                </li>
              );
            })}
          </ul>
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
    </>
  );
}
