import React from "react";
import styles from "./True_False.module.css";
export default function True_False(props) {
  return (
    <>
      <div className="element">
        <div className={styles.task}>
          <b className="taskname">{props.element.title}</b>
          <b className={styles.points}>__/{props.element.points}</b>
        </div>
        <div>
          <table border={1}>
            <thead></thead>
            <tbody>
              {props.element.asks.map((ask) => {
                return (
                  <tr key={ask}>
                    <th className={styles.value}>{ask}</th>
                    <th className={styles.t_f}>P</th>
                    <th className={styles.t_f}>F</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
