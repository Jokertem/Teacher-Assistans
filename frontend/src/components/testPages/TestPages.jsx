import styles from "./TestPages.module.css";
import { useState, useContext } from "react";
import { pagesContext } from "../../views/TestGenerator";
import React from "react";

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
  return (
    <>
      <h3>Strony</h3>
      {show ? (
        <>
          <div className={styles.pagesList}>
            {pages.map((page, index) => (
              <div
                key={page.name}
                className={styles.page}
                onClick={() => {
                  ChangeSelect(index);
                }}
              >
                <b>{page.name}</b>
              </div>
            ))}
          </div>
          <div className={styles.hider} onClick={ShowList}></div>
        </>
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
