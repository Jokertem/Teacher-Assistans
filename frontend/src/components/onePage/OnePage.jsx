import React from "react";
import styles from "./OnePage.module.css";
import { useState, useContext, useEffect } from "react";
import { pagesContext } from "../../views/TestGenerator";
import Elements from "../elements/Elements";
export default function OnePage() {
  const { _pages, _select, _elements } = useContext(pagesContext);
  const [pages, setPages] = _pages;
  const [select, setSelect] = _select;
  const [elements, setElements] = _elements;

  const [title, setTitle] = useState("Sprawdzian");
  const [max, setMax] = useState(0);

  const [editTitle, setEditTitle] = useState(false);
  const ChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
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
          </div>
        </>
      )}
    </>
  );
}
