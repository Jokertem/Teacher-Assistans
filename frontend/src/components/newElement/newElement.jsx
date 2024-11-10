import React from "react";
import Text_form from "../testElements/text/Text_form";
import ABC_form from "../testElements/abc/ABC_form";
import { useContext } from "react";
import { pagesContext } from "../../views/TestGenerator";

export default function NewElement(props) {
  const { _pages, _select, _elements, _modal, _edit } =
    useContext(pagesContext);
  const [pages, setPages] = _pages;
  const [select, setSelect] = _select;
  const [elements, setElements] = _elements;
  const [modal, setModal] = _modal;
  const [editElement, setEditElement] = _edit;
  const Add = (data) => {
    if (!editElement) {
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
    } else {
      const editIndex = elements.findIndex(
        (element) => element._id == editElement._id
      );
      const newElements = elements.map((element, index) => {
        if (editIndex == index) {
          return data;
        } else {
          return element;
        }
      });
      const newPage = pages.map((page, index) => {
        if (index == select) {
          return {
            ...page,
            elements: newElements,
          };
        } else {
          return page;
        }
      });
      setPages(newPage);
    }

    setModal(false);
    setEditElement(null);
  };
  if (props.type == "ABC") {
    return <ABC_form add={Add} />;
  } else if (props.type == "Text") {
    return <Text_form add={Add} />;
  }
}
