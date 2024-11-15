import styles from "./TestPages.module.css";
import { useState, useContext, useEffect } from "react";
import { pagesContext } from "../../views/TestGenerator";
import React from "react";
import { Page } from "../../classes/page";
import { PagesNumerator } from "../../utils/pagesNumerator.js";
import { TaskNumerator } from "../../utils/tasksNumerator.js";

export default function TestPages() {
  const { _pages, _select } = useContext(pagesContext);
  const [pages, setPages] = _pages;
  const [select, setSelect] = _select;
  const [show, setShow] = useState(true);
  const ShowList = () => {
    setShow(!show);
  };

  const ChangeSelect = (e) => {
    setSelect(e);
  };

  const AddPage = () => {
    const newPage = new Page("Strona");
    setPages([...pages, newPage]);
    setPages(PagesNumerator);
  };
  const RemovePage = (index) => {
    setSelect(null);
    setPages(pages.filter((page, i) => i != index));
    setPages(PagesNumerator);
  };

  const BackIndex = (index) => {
    if (index > 0) {
      const updatePages = [...pages];
      [updatePages[index], updatePages[index - 1]] = [
        updatePages[index - 1],
        updatePages[index],
      ];
      setPages(updatePages);
      setPages(PagesNumerator);
      setPages(TaskNumerator);
    }
  };
  const ForwardIndex = (index) => {
    if (index < pages.length - 1) {
      const updatePages = [...pages];
      [updatePages[index], updatePages[index + 1]] = [
        updatePages[index + 1],
        updatePages[index],
      ];
      setPages(updatePages);
      setPages(PagesNumerator);
      setPages(TaskNumerator);
    }
  };
  return (
    <>
      <h3>Strony</h3>
      {show ? (
        <div>
          <div className={styles.pagesList}>
            {pages.map((page, index) => (
              <div key={page.id} className={styles.pageContainer}>
                <div
                  className={styles.page}
                  onClick={() => {
                    ChangeSelect(index);
                  }}
                >
                  <b>{page.name}</b>
                </div>

                <div className={styles.page_panel}>
                  {index != 0 && (
                    <div
                      className={styles.leftArrow}
                      onClick={() => {
                        BackIndex(index);
                      }}
                    ></div>
                  )}
                  <img
                    className={styles.trash}
                    src="public/trash.png"
                    alt="Trash Icon"
                    onClick={() => {
                      RemovePage(index);
                    }}
                  />
                  {index + 1 != pages.length && (
                    <div
                      className={styles.rightArrow}
                      onClick={() => {
                        ForwardIndex(index);
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.add} onClick={AddPage}>
            +
          </div>
          <div className={styles.hider} onClick={ShowList}></div>
        </div>
      ) : (
        <div className={styles.show} onClick={ShowList}>
          <div>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      )}
    </>
  );
}
