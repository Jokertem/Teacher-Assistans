import React from "react";
import styles from "./Text.module.css";

export default function Text(props) {
  return (
    <>
      <div className="element">
        <b>{props.settings[0]}</b>
        <p>{props.settings[1]}</p>;
      </div>
    </>
  );
}
