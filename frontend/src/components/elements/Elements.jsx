import React from "react";
import styles from "./Elements.module.css";
import { useContext } from "react";
import { pagesContext } from "../../views/TestGenerator";
import Text from "../testElements/text/Text";
import ABC_horizontally from "../testElements/abc_horizontally/ABC_horizontally";

export default function Elements(props) {
  const { _elements } = useContext(pagesContext);
  const [elements, setElements] = _elements;

  return (
    <>
      {elements.map((element) => {
        console.log(element);
        if (element.type == "Text") {
          return <Text key={element._id} settings={element.settings} />;
        } else if (element.type == "ABC(h)") {
          return (
            <ABC_horizontally key={element._id} settings={element.settings} />
          );
        }
      })}
    </>
  );
}
