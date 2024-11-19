import React from "react";
import styles from "./ShortTestPage.module.css";
import { elementsContext } from "../../views/ShortTestGenerator";
import { useState, useContext } from "react";
import ShortElements from "../elements/ShortElements";
export default function ShortTestPage() {
  const { _elements, _modal } = useContext(elementsContext);
  const [elements, setElements] = _elements;
  const [modal, setModal] = _modal;

  const [title, setTitle] = useState("Kartkówka");
  const [editTitle, setEditTitle] = useState(false);
  const [max, setMax] = useState(1);
  const ChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      {editTitle && (
        <textarea
          className={styles.title_input}
          value={title}
          onChange={ChangeTitle}
        ></textarea>
      )}
      <h3>Karkówka</h3>
      <div className={styles.page}>
        <div className={styles.page__header}>
          <div>
            <span>_______</span>
            <p>podpis</p>
          </div>
          <div>
            <b>{title}</b>
            <img
              className={styles.edit}
              src="public/editIcon.png"
              alt="Edit Title Icon"
              onClick={() => {
                setEditTitle(!editTitle);
              }}
            />
          </div>
          <div>
            <b>{`___/${max}`}</b>
          </div>
        </div>
        <ShortElements />
        <div className={styles.addContainer}>
          <button
            className={styles.add}
            onClick={() => {
              setModal(true);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
