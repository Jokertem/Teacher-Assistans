import React from "react";
import styles from "./Open.module.css";
export default function Open(props) {
  const lines = [];
  for (let index = 0; index < props.element.lines; index++) {
    lines.push("line");
  }

  return (
    <div className="element">
      <b>{props.element.title}</b>
      <b className={styles.points}>__/{props.element.points}</b>

      {lines.map((line, index) => {
        return (
          <div key={index}>
            ....................................................................................................................................................................................
          </div>
        );
      })}
    </div>
  );
}
