import React from "react";
import Navigate from "../components/navigate/Navigate";
import { useState } from "react";

export default function Home() {
  const pages = [
    {
      name: "Generator Sprawdzianów",
      path: "/Sprawdziany",
      id: 0,
    },
    {
      name: "Generator Kartkówek",
      path: "/Kartkówki",
      id: 1,
    },
    {
      name: "Kalkulator Ocen",
      path: "/Oceny",
      id: 2,
    },
  ];
  return (
    <>
      <div className="navigation">
        {pages.map((page) => (
          <Navigate key={page.id} name={page.name} path={page.path} />
        ))}
      </div>
    </>
  );
}
