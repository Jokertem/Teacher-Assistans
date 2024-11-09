import React from "react";
import Text_form from "../testElements/text/Text_form";
import ABC_form from "../testElements/abc/ABC_form";
import { useContext } from "react";
import { pagesContext } from "../../views/TestGenerator";

export default function NewElement(props) {
  const { _pages, _select, _elements, _modal } = useContext(pagesContext);
  const [pages, setPages] = _pages;
  const [select, setSelect] = _select;
  const [elements, setElements] = _elements;
  const [modal, setModal] = _modal;

  const Add = (data) => {
    const newElement = [...pages[select].elements, data];
    const newPage = pages.map((page, index) => {
      if (index == select) {
        return {
          ...page,
          elements: newElement,
        };
      } else {
        return page;
      }
    });
    setPages(newPage);
    setModal(false);
    console.log(pages);
  };
  if (props.type == "ABC") {
    return <ABC_form />;
  } else if (props.type == "Text") {
    return <Text_form add={Add} />;
  }
}
