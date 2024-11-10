import React from "react";
import styles from "./Elements.module.css";
import { useContext } from "react";
import { pagesContext } from "../../views/TestGenerator";
import Text from "../testElements/text/Text";
import ABC from "../testElements/abc/ABC";
import Element_panel from "../element_panel/Element_panel";
export default function Elements(props) {
  const { _elements, _modal } = useContext(pagesContext);
  const [elements, setElements] = _elements;
  const [modal, setModal] = _modal;

  return (
    <>
      {elements.map((element, index) => {
        if (element.type == "Text") {
          return (
            <div key={element._id}>
              <Text element={element} />;
              <Element_panel index={index} />
            </div>
          );
        } else if (element.type == "ABC") {
          return (
            <div key={element._id}>
              <ABC element={element} />;
              <Element_panel index={index} />
            </div>
          );
        }
      })}
    </>
  );
}
