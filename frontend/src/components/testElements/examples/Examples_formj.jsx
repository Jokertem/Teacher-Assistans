import styles from "./Examples.module.css";
import { Examples } from "../../../classes/examples";
import { useState, useEffect } from "react";
export default function Examples_Formj(props) {
  const [editElement, setEditElement] = useState(props.edit);
  const [task, setTask] = useState("");
  const [examples, setExamples] = useState([]);
  const [points, setPoints] = useState("");
  const [exaName, setExaName] = useState("");
  const ChangeTask = (e) => {
    setTask(e.target.value);
  };
  const ChangePoints = (e) => {
    setPoints(e.target.value);
  };
  const ChangeName = (e) => {
    setExaName(e.target.value);
  };
  const RemoveExa = (i) => {
    setExamples(examples.filter((example, index) => i != index));
  };
  const AddExa = (e) => {
    e.preventDefault();
    if (exaName.trim() == "") {
      return;
    }
    setExamples([...examples, exaName]);
  };
  const Create = (e) => {
    e.preventDefault();
    if (
      task.trim() == "" ||
      isNaN(points) ||
      points <= 0 ||
      examples.length == 0
    ) {
      return;
    }
    const newTask = new Examples(task, examples, points);
    props.add(newTask);
  };
  useEffect(() => {
    if (editElement && editElement.type == "Przykłady") {
      setTask(editElement.title);
      setExamples(editElement.exa);
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
        <div className={styles.newExa}>
          <textarea
            name=""
            id=""
            placeholder="Przykłady"
            onChange={ChangeName}
          ></textarea>
          <button onClick={AddExa}>Dodaj</button>
        </div>
        <div>
          <ul>
            {examples.map((example, index) => {
              return (
                <li className={styles.list} key={example}>
                  {example}
                  <img
                    className={styles.remove}
                    src="public/trash.png"
                    alt=""
                    onClick={() => {
                      RemoveExa(index);
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
