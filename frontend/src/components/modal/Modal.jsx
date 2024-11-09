import React from "react";
import styles from "./Modal.module.css";
import { useState } from "react";
import { useContext } from "react";
import { pagesContext } from "../../views/TestGenerator";
import NewElement from "../newElement/newElement";
export default function Modal() {
  const { _modal } = useContext(pagesContext);
  const [modal, setModal] = _modal;
  const [types, setTypes] = useState(["Text", "ABC"]);
  const [selectType, setSelectType] = useState("Text");
  const ChangeType = (e) => {
    setSelectType(e.target.value);
  };
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
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <NewElement type={selectType} />

          <button
            id="remove"
            onClick={() => {
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
