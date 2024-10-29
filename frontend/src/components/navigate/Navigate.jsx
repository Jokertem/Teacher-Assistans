import styles from "./Navigate.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Navigate(props) {
  return (
    <Link to={props.path}>
      <button className={styles.button}>{props.name}</button>
    </Link>
  );
}
