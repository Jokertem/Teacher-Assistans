import styles from "./Complete.module.css";
import { Complete } from "../../../classes/complete";
import { useState, useEffect, useContext } from "react";
import { pagesContext } from "../../../views/TestGenerator";
export default function Complete_form(props) {
  const [editElement, setEditElement] = useState(props.edit);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [points, setPoints] = useState("");
  const ChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const ChangeText = (e) => {
    setText(e.target.value);
  };
  const ChangePoints = (e) => {
    setPoints(e.target.value);
  };
  const Create = (e) => {
    e.preventDefault();

    if (
      title.trim() == "" ||
      text.trim() == "" ||
      isNaN(points) ||
      points <= 0
    ) {
      return;
    }
    const newText = new Complete(title.trim(), text.trim(), points);
    props.add(newText);
  };
  useEffect(() => {
    if (editElement && editElement.type == "Uzupełnij Tekst") {
      setTitle(editElement.title);
      setText(editElement.text);
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
      <div className={styles.form__textValue}>
        <label htmlFor="text_value">Treśc tekstu</label>
        <textarea
          name=""
          id="text_value"
          cols="15"
          rows="2"
          value={text}
          onChange={ChangeText}
        ></textarea>
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
