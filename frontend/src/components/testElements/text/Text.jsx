import React from "react";
import styles from "./Text.module.css";

export default function Text(props) {
  return (
    <>
      <div className="element">
        <b>{props.element.title}</b>
        <p className={styles.textValue}>{props.element.text}</p>
      </div>
    </>
  );
}
