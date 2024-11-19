import React from "react";
import styles from "./Elements.module.css";
import { useContext } from "react";
import { elementsContext } from "../../views/ShortTestGenerator";
import Text from "../testElements/text/Text";
import ABC from "../testElements/abc/ABC";
import Element_panel from "../element_panel/Element_panel";
export default function ShortElements() {
  const { _elements, _modal } = useContext(elementsContext);
  const [elements, setElements] = _elements;
  const [modal, setModal] = _modal;

  return (
    <>
      {elements.map((element, index) => {
        if (element.type == "Text") {
          return (
            <div className="element" key={element._id}>
              <Text element={element} />;
            </div>
          );
        } else if (element.type == "ABC") {
          return (
            <div className="element" key={element._id}>
              <ABC element={element} />;
            </div>
          );
        }
      })}
    </>
  );
}
