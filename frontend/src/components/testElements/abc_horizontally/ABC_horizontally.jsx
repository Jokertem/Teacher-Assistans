import React from "react";
import styles from "./ABC_horizontally.module.css";

export default function ABC_horizontally(props) {
  return (
    <div className="element">
      <b>{props.settings[0]}</b>
      <div className={styles.anwsers}>
        <span>{`A.${props.settings[1]}`}</span>
        <span>{`B.${props.settings[2]}`}</span>
        <span>{`C.${props.settings[3]}`}</span>
        <span>{`D.${props.settings[4]}`}</span>
      </div>
    </div>
  );
}
