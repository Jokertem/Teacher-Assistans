import React from "react";
import styles from "./AllPages.module.css";
import { useContext } from "react";
import { pagesContext } from "../../views/TestGenerator";
import { PrintContext } from "../../App";
import Text from "../testElements/text/Text";
import ABC from "../testElements/abc/ABC";
import True_False from "../testElements/true_false/True_False";
import Open from "../testElements/open/Open";
import Examples from "../testElements/examples/Examples";
import Cases from "../testElements/cases/Cases";
import Complete from "../testElements/complete/Complete";

function Elements(props) {
  return (
    <div>
      {props.elements.map((element, index) => {
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
        } else if (element.type == "Prawda/Fałsz") {
          return (
            <div className="element" key={element._id}>
              <True_False element={element} />
            </div>
          );
        } else if (element.type == "Otwarte") {
          return (
            <div className="element" key={element._id}>
              <Open element={element} />
            </div>
          );
        } else if (element.type == "Przykłady") {
          return (
            <div className="element" key={element._id}>
              <Examples element={element} />
            </div>
          );
        } else if (element.type == "Przypadki") {
          return (
            <div className="element" key={element._id}>
              <Cases element={element} />
            </div>
          );
        } else if (element.type == "Uzupełnij Tekst") {
          return (
            <div className="element" key={element._id}>
              <Complete element={element} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default function AllPages() {
  const { _print } = useContext(PrintContext);
  const [innerRef, handlePrint] = _print;
  const { _pages, _select, _elements, _modal, _title, _max } =
    useContext(pagesContext);
  const [pages, setPages] = _pages;
  const [select, setSelect] = _select;
  const [elements, setElements] = _elements;
  const [modal, setModal] = _modal;
  const [title, setTitle] = _title;
  const [max, setMax] = _max;
  return (
    <>
      <div ref={innerRef} className={styles.all}>
        {pages.map((page, index) => {
          return (
            <div key={page.name} className={styles.page}>
              {index == 0 && (
                <>
                  <div className={styles.page__header}>
                    <div className="signature">
                      <span>_______</span>
                      <p>podpis</p>
                    </div>
                    <div>
                      <b>{title}</b>
                    </div>
                    <div>
                      <b>{`___/${max}`}</b>
                    </div>
                  </div>
                </>
              )}
              <Elements elements={page.elements} />
            </div>
          );
        })}
      </div>
    </>
  );
}
