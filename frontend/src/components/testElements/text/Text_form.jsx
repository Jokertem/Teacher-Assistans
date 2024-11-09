import React from "react";
import styles from "./Text.module.css";
import { Text } from "../../../classes/text";
export default function Text_form(props) {
  const Create = (e) => {
    e.preventDefault();
    console.log(document.querySelector("#text_value").value);
    if (
      document.querySelector("#text_title").value.trim() == "" &&
      document.querySelector("#text_value").value.trim() == ""
    ) {
      return;
    }
    const newText = new Text(
      document.querySelector("#text_title").value.trim(),
      document.querySelector("#text_value").value.trim()
    );
    props.add(newText);
  };
  return (
    <form className="elementform" action="">
      <div>
        <label htmlFor="text_title">Polecenie</label>
        <input type="text" name="" id="text_title" />
      </div>
      <div className={styles.form__textValue}>
        <label htmlFor="text_value">Treśc tekstu</label>
        <textarea name="" id="text_value" cols="15" rows="2"></textarea>
      </div>
      <button id="add" onClick={Create}>
        Dodaj
      </button>
    </form>
  );
}
