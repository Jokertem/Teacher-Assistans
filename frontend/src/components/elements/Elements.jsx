import React from "react";
import styles from "./Elements.module.css";
import { useContext } from "react";
import { pagesContext } from "../../views/TestGenerator";
import Text from "../testElements/text/Text";
import ABC from "../testElements/abc/ABC";

export default function Elements(props) {
  const { _elements, _modal } = useContext(pagesContext);
  const [elements, setElements] = _elements;
  const [modal, setModal] = _modal;

  return (
    <>
      {elements.map((element) => {
        if (element.type == "Text") {
          return <Text key={element._id} element={element} />;
        } else if (element.type == "ABC") {
          return <ABC key={element._id} element={element} />;
        }
      })}
    </>
  );
}
