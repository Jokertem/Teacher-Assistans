import styles from "./OnePage.module.css";
import { useState, useContext, useEffect } from "react";
import { pagesContext } from "../../views/TestGenerator";
import { PrintContext } from "../../App";
import Elements from "../elements/Elements";
import { PointsCouter } from "../../utils/pointsCounter";
import { TaskNumerator } from "../../utils/tasksNumerator";
export default function OnePage() {
  const { _print } = useContext(PrintContext);
  const [innerRef, handlePrint] = _print;
  const { _pages, _select, _elements, _modal, _title, _max } =
    useContext(pagesContext);
  const [pages, setPages] = _pages;
  const [select, setSelect] = _select;
  const [elements, setElements] = _elements;
  const [modal, setModal] = _modal;
  const [title, setTitle] = _title;
  const [max, setMax] = _max;

  const [editTitle, setEditTitle] = useState(false);
  const ChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    const newMax = PointsCouter(max, pages);
    setMax(newMax);
    setPages(TaskNumerator);
  }, [pages]);
  return (
    <>
      {pages.length != 0 && (
        <button className={styles.print} onClick={handlePrint}>
          Drukuj
        </button>
      )}
      {select != null && (
        <>
          <h3>Sprawdzian</h3>
          {select == 0 && editTitle && (
            <textarea
              className={styles.title_input}
              value={title}
              onChange={ChangeTitle}
            ></textarea>
          )}
          <div className={styles.page}>
            {select == 0 && (
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
            )}
            <Elements />
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
      )}
    </>
  );
}
