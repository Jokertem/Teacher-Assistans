import React from "react";
import styles from "./OnePage.module.css";
import { useState, useContext, useEffect } from "react";
import { pagesContext } from "../../views/TestGenerator";

import Header from "../testElements/header/Header";
import PasteElement from "../pasteElement/PasteElement";

export default function OnePage() {
  const { _pages, _select } = useContext(pagesContext);
  const [pages, setPages] = _pages;
  const [select, setSelect] = _select;
  const [elements, setElements] = useState([]);

  useEffect(() => {
    if (select != null) {
      setElements(pages[select].elements);
    }
  }, [select]);
  return (
    <>
      {select != null && (
        <>
          <h3>Sprawdzian</h3>
          <div className={styles.page}>
            {elements.map((element) => (
              <PasteElement key={element.name} element={element} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
