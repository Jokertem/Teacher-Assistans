import styles from "./Cases.module.css";
import { Cases } from "../../../classes/cases";
import { useState, useEffect } from "react";
export default function Cases_form(props) {
  const [editElement, setEditElement] = useState(props.edit);
  const [task, setTask] = useState("");
  const [word, setWord] = useState("");
  const [points, setPoints] = useState("");
  const ChangeTask = (e) => {
    setTask(e.target.value);
  };

  const ChangePoints = (e) => {
    setPoints(e.target.value);
  };
  const ChangeWord = (e) => {
    setWord(e.target.value);
  };
  const Create = (e) => {
    e.preventDefault();
    if (
      task.trim() == "" ||
      isNaN(points) ||
      points <= 0 ||
      word.trim() == ""
    ) {
      return;
    }
    const newTask = new Cases(task, word, points);
    props.add(newTask);
  };
  useEffect(() => {
    if (editElement && editElement.type == "Przypadki") {
      setTask(editElement.title);
      setWord(editElement.word);
      setPoints(editElement.points);
    }
  }, [editElement]);
  return (
    <form className="elementform" action="">
      <div>
        <label htmlFor="">Treść zadania</label>
        <input type="text" value={task} onChange={ChangeTask} />
      </div>
      <div>
        <label htmlFor="word">Słowo</label>
        <input type="text" value={word} onChange={ChangeWord} />
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
