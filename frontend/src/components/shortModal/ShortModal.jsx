import React from "react";
import styles from "./ShortModal.module.css";
import { useState, useContext } from "react";
import { elementsContext } from "../../views/ShortTestGenerator";
export default function ShortModal() {
  const [types, setTypes] = useState(["Text", "ABC"]);
  const { _modal, _edit } = useContext(elementsContext);
  const [editElement, setEditElement] = _edit;
  const [modal, setModal] = _modal;
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
              <option key={type}>{type} </option>
            ))}
          </select>
          {/* <NewElement type={selectType} /> */}

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
