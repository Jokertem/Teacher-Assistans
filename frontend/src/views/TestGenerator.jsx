import React from "react";
import Paga_Name from "../components/page_name/Paga_Name";
import TestPages from "../components/testPages/TestPages";
import OnePage from "../components/onePage/OnePage";
import { useState, createContext } from "react";
export const pagesContext = createContext();
export const elementsContext = createContext();
export default function TestGenerator() {
  const [select, setSelect] = useState(null);
  const [pages, setPages] = useState([
    {
      name: "Strona 1",
      elements: [{ name: "header", settings: ["Sprawdzian"] }],
      _id: crypto.randomUUID(),
    },
    {
      name: "Strona 2",
      elements: [{ name: "ABC", settings: ["Sprawdzian"] }],
      _id: crypto.randomUUID(),
    },
    {
      name: "Strona 3",
      elements: [{ name: "Text", settings: ["Sprawdzian"] }],
      _id: crypto.randomUUID(),
    },
    {
      name: "Strona 4",
      elements: [],
      _id: crypto.randomUUID(),
    },
  ]);
  return (
    <>
      <pagesContext.Provider
        value={{ _pages: [pages, setPages], _select: [select, setSelect] }}
      >
        <Paga_Name name={"Generator Sprawdzianów"} />
        <TestPages />
        <OnePage />
      </pagesContext.Provider>
    </>
  );
}
