import React from "react";
import styles from "./Element_panel.module.css";
import { useContext } from "react";
import { pagesContext } from "../../views/TestGenerator";
export default function Element_panel(props) {
  const { _pages, _select, _elements, _modal, _edit } =
    useContext(pagesContext);
  const [pages, setPages] = _pages;
  const [select, setSelect] = _select;
  const [elements, setElements] = _elements;
  const [modal, setModal] = _modal;
  const [editElement, setEditElement] = _edit;

  const SelectEdit = (index) => {
    setEditElement(pages[select].elements[index]);
    setModal(true);

    console.log(editElement);
  };
  const Remove = (i) => {
    const newElements = elements.filter((element, index) => index != i);
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
  };

  const BackIndex = (index) => {
    if (index > 0) {
      const updateElements = [...elements];
      [updateElements[index], updateElements[index - 1]] = [
        updateElements[index - 1],
        updateElements[index],
      ];
      console.log(updateElements);
      const newPage = pages.map((page, index) => {
        if (index == select) {
          return {
            ...page,
            elements: updateElements,
          };
        } else {
          return page;
        }
      });
      setPages(newPage);
    }
  };
  const ForwardIndex = (index) => {
    if (index < elements.length - 1) {
      const updateElements = [...elements];
      [updateElements[index], updateElements[index + 1]] = [
        updateElements[index + 1],
        updateElements[index],
      ];
      const newPage = pages.map((page, index) => {
        if (index == select) {
          return {
            ...page,
            elements: updateElements,
          };
        } else {
          return page;
        }
      });
      setPages(newPage);
    }
  };
  return (
    <>
      {elements.length >= 1 && (
        <div className={styles.element_panel}>
          <div
            className={styles.upArrow}
            onClick={() => {
              BackIndex(props.index);
            }}
          ></div>
          <img
            src="public/editIcon.png"
            alt="Edit Icon"
            onClick={() => {
              SelectEdit(props.index);
            }}
          />
          <img
            src="public/trash.png"
            alt="Remove Icon"
            onClick={() => {
              Remove(props.index);
            }}
          />
          <div
            className={styles.downArrow}
            onClick={() => {
              ForwardIndex(props.index);
            }}
          ></div>
        </div>
      )}
    </>
  );
}
