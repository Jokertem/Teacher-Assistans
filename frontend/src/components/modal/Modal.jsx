import React from "react";
import styles from "./Modal.module.css";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { pagesContext } from "../../views/TestGenerator";
import NewElement from "../newElement/newElement";
export default function Modal() {
  const { _pages, _modal, _edit, _select } = useContext(pagesContext);
  const [modal, setModal] = _modal;
  const [editElement, setEditElement] = _edit;
  const [select, setSelect] = _select;

  const [pages, setPages] = _pages;
  const [types, setTypes] = useState([
    "Text",
    "ABC",
    "Prawda/Fałsz",
    "Otwarte",
  ]);
  const [selectType, setSelectType] = useState("Text");
  const ChangeType = (e) => {
    setSelectType(e.target.value);
  };
  useEffect(() => {
    if (editElement == null) {
      setSelectType("Text");
    } else {
      setSelectType(editElement.type);
    }
  }, [editElement]);
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modal__body}>
          <select
            className={styles.select}
            name="type"
            id="type"
            onChange={ChangeType}
          >
            {types.map((type, index) => (
              <option key={type}>{type} </option>
            ))}
          </select>
          <NewElement type={selectType} />

          <button
            id="remove"
            onClick={() => {
              setEditElement(null);
              setModal(false);
            }}
          >
            Odrzuć
          </button>
        </div>
      </div>
    </>
  );
}
