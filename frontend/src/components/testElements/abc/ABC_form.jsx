import React from "react";
import styles from "./ABC.module.css";
export default function ABC_form() {
  return (
    <form className="elementform" action="">
      <div>
        <label htmlFor="">Treść zadania</label>
        <input type="text" />
      </div>
      <div className={styles.form__answers}>
        <div>
          <label htmlFor="">A</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">B</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">C</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">D</label>
          <input type="text" name="" id="" />
        </div>
      </div>
      <div>
        <label htmlFor="">Punkty</label>
        <input type="number" name="" id="" />
      </div>
      <button id="add">Dodaj</button>
    </form>
  );
}
