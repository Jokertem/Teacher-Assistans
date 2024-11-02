import React from "react";
import styles from "./PasteElement.module.css";
import Header from "../testElements/header/Header";

export default function PasteElement(props) {
  if (props.element.name == "header") {
    return <Header settings={props.element.settings} />;
  }
}
