import React from "react";
import Paga_Name from "../components/page_name/Paga_Name";
import TestPages from "../components/testPages/TestPages";
import OnePage from "../components/onePage/OnePage";
import { useState, createContext, useEffect } from "react";
export const pagesContext = createContext();
export const elementsContext = createContext();
export default function TestGenerator() {
  const [select, setSelect] = useState(null);
  const [elements, setElements] = useState([]);
  const [pages, setPages] = useState([
    {
      name: "Strona 1",
      elements: [
        {
          type: "Text",
          settings: [
            "Zapoznaj się z tym wierszem",
            "Czy jesień nie jest trochę magiczna? Ta piękna pora roku pełna jest ciepłych i złocistych barw i wspaniałych widoków. Od chrzęszczenia opadłych liści pod stopami, przez zapach dymu w ogrodach, po smaki suszonych owoców, jabłek i orzechów, jesień odżałowuje na wszystkie nasze zmysły, często niosąc ze sobą przyjemne, nieco melancholijne skojarzenia. Nic więc dziwnego, że jesień jest porą roku, która od wieków inspiruje, malarzy, pisarzy i poetów.     Jesień może też stanowić doskonałą inspirację dla nauczycieli, którzy pragną wprowadzić nieco jej uroku do swoich lekcji. Zaś jednym z najlepszych sposobów, by jesiennie zainspirować uczniów i odkryć przed nimi piękno jesieni, są wiersze o jesieni. Rymowane strofy o jesiennych krajobrazach, smakach i zapachach i innych motywach kojarzących się z tą wieńczącą lato i poprzedzająca zimę porą roku mogą stać się podstawą wyjątkowej lekcji dla dzieci w szkole lub w przedszkolu.    I to właśnie dlatego postanowiliśmy zebrać tu, w jednym miejscu, najpiękniejsze wiersze o jesieni. ",
          ],
          _id: crypto.randomUUID(),
        },
        {
          type: "ABC(h)",
          settings: [
            "Z jakiego kraju pochodzi glock",
            "Austria",
            "Węgry",
            "Włochy",
            "Niemcy",
            1,
          ],
          _id: crypto.randomUUID(),
        },
      ],
    },

    {
      name: "Strona 2",
      elements: [],
    },
  ]);
  useEffect(() => {
    if (select != null) {
      setElements(pages[select].elements);
      const el = pages[select].elements;
      console.log(el);
    }
  }, [select]);
  return (
    <>
      <pagesContext.Provider
        value={{
          _pages: [pages, setPages],
          _select: [select, setSelect],
          _elements: [elements, setElements],
        }}
      >
        <Paga_Name name={"Generator Sprawdzianów"} />
        <TestPages />
        <OnePage />
      </pagesContext.Provider>
    </>
  );
}
