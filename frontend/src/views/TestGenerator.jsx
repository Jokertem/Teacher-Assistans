import React from "react";
import Paga_Name from "../components/page_name/Paga_Name";
import TestPages from "../components/testPages/TestPages";
import OnePage from "../components/onePage/OnePage";
import Modal from "../components/modal/modal";
import { TaskNumerator } from "../utils/tasksNumerator.js";
import { useState, createContext, useEffect } from "react";
export const pagesContext = createContext();
export const elementsContext = createContext();
export default function TestGenerator() {
  const [select, setSelect] = useState(null);
  const [elements, setElements] = useState([]);
  const [modal, setModal] = useState(false);
  const [editElement, setEditElement] = useState(null);
  const [pages, setPages] = useState([
    {
      name: "Strona 1",
      id: crypto.randomUUID(),
      elements: [],
    },
  ]);

  useEffect(() => {
    if (select != null) {
      setElements(pages[select].elements);
    }
    if (pages) {
      localStorage.setItem("Test", JSON.stringify(pages));
    }
  }, [select, pages]);
  const items = JSON.parse(localStorage.getItem("Test"));
  useEffect(() => {
    if (items) {
      setPages(items);
    }
  }, []);
  return (
    <>
      <pagesContext.Provider
        value={{
          _pages: [pages, setPages],
          _select: [select, setSelect],
          _elements: [elements, setElements],
          _modal: [modal, setModal],
          _edit: [editElement, setEditElement],
        }}
      >
        <Paga_Name name={"Generator Sprawdzianów"} />
        <TestPages />
        <OnePage />
        {modal && <Modal />}
      </pagesContext.Provider>
    </>
  );
}
