import React from "react";
import styles from "./Open.module.css";
import { useState, useEffect } from "react";
import { Open } from "../../../classes/open";
export default function Open_form(props) {
  const [editElement, setEditElement] = useState(props.edit);
  const [title, setTitle] = useState("");
  const [lines, setLines] = useState(1);
  const [points, setPoints] = useState("");

  const ChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const ChangeLines = (e) => {
    setLines(e.target.value);
  };
  const ChangePoints = (e) => {
    setPoints(e.target.value);
  };
  const Create = (e) => {
    e.preventDefault();

    if (title.trim() == "" || isNaN(points) || points <= 0) {
      return;
    }
    const newText = new Open(title.trim(), lines, points);
    props.add(newText);
  };
  useEffect(() => {
    if (editElement && editElement.type == "Otwarte") {
      setTitle(editElement.title);
      setLines(editElement.lines);
      setPoints(editElement.points);
    }
  }, [editElement]);
  return (
    <form className="elementform" action="">
      <div>
        <label htmlFor="text_title">Polecenie</label>
        <input
          type="text"
          name=""
          id="text_title"
          value={title}
          onChange={ChangeTitle}
        />
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
      <div className={styles.lines}>
        <label htmlFor="Lines">Ilośc Lini</label>
        <input type="range" min={1} max={7} onChange={ChangeLines} />
        <b className={styles.lines__count}>{lines}</b>
      </div>
      <button id="add" onClick={Create}>
        Dodaj
      </button>
    </form>
  );
}
