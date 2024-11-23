import React from "react";
import styles from "./ShortTestPage.module.css";
import { elementsContext } from "../../views/ShortTestGenerator";
import { PrintContext } from "../../App";
import { useState, useContext, useEffect } from "react";
import ShortElements from "../elements/ShortElements";
import { ShortPointsCouter } from "../../utils/pointsCounter";
import { ShortTaskNumerator } from "../../utils/tasksNumerator";
export default function ShortTestPage() {
  const { _print } = useContext(PrintContext);
  const [innerRef, handlePrint] = _print;
  const { _elements, _modal, _edit } = useContext(elementsContext);
  const [elements, setElements] = _elements;
  const [modal, setModal] = _modal;
  const [editElement, setEditElement] = _edit;

  const [title, setTitle] = useState("Kartkówka");
  const [editTitle, setEditTitle] = useState(false);
  const [max, setMax] = useState(0);

  const [split, setSplit] = useState(false);
  const ChangeSplit = () => {
    setSplit(!split);
    console.log(split);
  };
  const ChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    const newMax = ShortPointsCouter(max, elements);
    setMax(newMax);
    setElements(ShortTaskNumerator);
  }, [elements]);
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
      <div className={styles.split} onChange={ChangeSplit}>
        <label htmlFor="">Podziel</label>
        <input type="checkbox" name="" id="" />
      </div>
      <button className={styles.print} onClick={handlePrint}>
        Drukuj
      </button>
      <div className={styles.page} ref={innerRef}>
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
        {split && (
          <>
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
          </>
        )}
      </div>
    </>
  );
}
