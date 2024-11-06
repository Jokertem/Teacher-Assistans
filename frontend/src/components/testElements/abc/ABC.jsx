import React from "react";
import styles from "./ABC.module.css";

export default function ABC(props) {
  return (
    <div className="element">
      <div className={styles.task}>
        <b className="taskname">{props.element.ask}</b>
        <b className={styles.points}>__/{props.element.points}</b>
      </div>
      <div className={styles.anwsers}>
        <span>
          <b>A.</b>
          {props.element.anwsers[0]}
        </span>
        <span>
          <b>B.</b>
          {props.element.anwsers[1]}
        </span>
        <span>
          <b>C.</b>
          {props.element.anwsers[2]}
        </span>

        <span>
          <b>D.</b>
          {props.element.anwsers[3]}
        </span>
      </div>
    </div>
  );
}
