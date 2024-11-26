import React from "react";
import styles from "./Elements.module.css";
import { useContext } from "react";
import { elementsContext } from "../../views/ShortTestGenerator";
import Text from "../testElements/text/Text";
import ABC from "../testElements/abc/ABC";
import True_False from "../testElements/true_false/True_False";
import Open from "../testElements/open/Open";
import Examples from "../testElements/examples/Examples";
import Cases from "../testElements/cases/Cases";
import ShortElement_panel from "../element_panel/ShortElement_panel";
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
              <Text element={element} />
              <ShortElement_panel index={index} />
            </div>
          );
        } else if (element.type == "ABC") {
          return (
            <div className="element" key={element._id}>
              <ABC element={element} />
              <ShortElement_panel index={index} />
            </div>
          );
        } else if (element.type == "Prawda/Fałsz") {
          return (
            <div className="element" key={element._id}>
              <True_False element={element} />
              <ShortElement_panel index={index} />
            </div>
          );
        } else if (element.type == "Otwarte") {
          return (
            <div className="element" key={element._id}>
              <Open element={element} />
              <ShortElement_panel index={index} />
            </div>
          );
        } else if (element.type == "Przykłady") {
          return (
            <div className="element" key={element._id}>
              <Examples element={element} />
              <ShortElement_panel index={index} />
            </div>
          );
        } else if (element.type == "Przypadki") {
          return (
            <div className="element" key={element._id}>
              <Cases element={element} />
              <ShortElement_panel index={index} />
            </div>
          );
        }
      })}
    </>
  );
}
