import React from "react";
import styles from "./Element_panel.module.css";
import { useContext } from "react";
import { elementsContext } from "../../views/ShortTestGenerator";
import { TaskNumerator } from "../../utils/tasksNumerator";
import { ShortTaskNumerator } from "../../utils/tasksNumerator";
export default function ShortElement_panel(props) {
  const { _elements, _modal, _edit } = useContext(elementsContext);

  const [elements, setElements] = _elements;
  const [modal, setModal] = _modal;
  const [editElement, setEditElement] = _edit;

  const SelectEdit = (index) => {
    setEditElement(elements[index]);
    setModal(true);
  };
  const Remove = (i) => {
    setElements(elements.filter((element, index) => index != i));
  };

  const BackIndex = (index) => {
    if (index > 0) {
      const updateElements = [...elements];
      [updateElements[index], updateElements[index - 1]] = [
        updateElements[index - 1],
        updateElements[index],
      ];
      setElements(updateElements);
      setElements(ShortTaskNumerator);
    }
  };
  const ForwardIndex = (index) => {
    if (index < elements.length - 1) {
      const updateElements = [...elements];
      [updateElements[index], updateElements[index + 1]] = [
        updateElements[index + 1],
        updateElements[index],
      ];
      setElements(updateElements);
      setElements(ShortTaskNumerator);
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
