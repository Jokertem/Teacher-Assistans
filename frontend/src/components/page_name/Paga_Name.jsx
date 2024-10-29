import styles from "./Page_name.module.css";

import React from "react";
import { Link } from "react-router-dom";

export default function Paga_Name(props) {
  return (
    <>
      <h2 className={styles.name}>{props.name}</h2>
      <Link className={styles.link} to={"/"}>
        <b>powrót</b>
      </Link>
    </>
  );
}
