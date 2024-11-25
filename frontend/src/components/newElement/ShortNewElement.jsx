import React from "react";
import Text_form from "../testElements/text/Text_form";
import ABC_form from "../testElements/abc/ABC_form";
import True_False_Form from "../testElements/true_false/True_False_Form";
import Open_form from "../testElements/open/Open_form";
import { useContext } from "react";
import { elementsContext } from "../../views/ShortTestGenerator";
import { TaskNumerator } from "../../utils/tasksNumerator";

export default function ShortNewElement(props) {
  const { _elements, _modal, _edit } = useContext(elementsContext);

  const [elements, setElements] = _elements;
  const [modal, setModal] = _modal;
  const [editElement, setEditElement] = _edit;
  const Add = (data) => {
    if (!editElement) {
      setElements([...elements, data]);
    } else {
      const editIndex = elements.findIndex(
        (element) => element._id == editElement._id
      );
      const newElement = data;
      const newElements = elements.map((element, index) => {
        if (editIndex == index) {
          return newElement;
        } else {
          return element;
        }
      });
      setElements(newElements);
    }

    setModal(false);
    setEditElement(null);
  };
  if (props.type == "ABC") {
    return <ABC_form edit={editElement} add={Add} />;
  } else if (props.type == "Text") {
    return <Text_form edit={editElement} add={Add} />;
  } else if (props.type == "Prawda/Fałsz") {
    return <True_False_Form edit={editElement} add={Add} />;
  } else if (props.type == "Otwarte") {
    return <Open_form edit={editElement} add={Add} />;
  }
}
