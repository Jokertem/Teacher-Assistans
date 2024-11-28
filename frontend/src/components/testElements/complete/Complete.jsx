import React from "react";
import styles from "./Complete.module.css";

export default function Complete(props) {
  return (
    <>
      <div className="element">
        <b>{props.element.title}</b>
        <b className={styles.points}>__/{props.element.points}</b>
        <p className={styles.textValue}>{props.element.text}</p>
      </div>
    </>
  );
}
