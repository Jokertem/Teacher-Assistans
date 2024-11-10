import React from "react";
import styles from "./Text.module.css";
import { Text } from "../../../classes/text";
import { useState, useEffect, useContext } from "react";
import { pagesContext } from "../../../views/TestGenerator";
export default function Text_form(props) {
  const { _edit } = useContext(pagesContext);
  const [editElement, setEditElement] = _edit;
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const ChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const ChangeText = (e) => {
    setText(e.target.value);
  };
  const Create = (e) => {
    e.preventDefault();

    if (title.trim() == "" || text.trim() == "") {
      return;
    }
    const newText = new Text(title.trim(), text.trim());
    props.add(newText);
  };
  useEffect(() => {
    if (editElement && editElement.type == "Text") {
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
      <button id="add" onClick={Create}>
        Dodaj
      </button>
    </form>
  );
}
