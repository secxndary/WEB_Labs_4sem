import React from "react";
import { SortTable } from "./SortTable";

function FirstPage() {
  return (
    <>
      <h1>Таблица продуктов</h1>
      <h2>Валдайцев А. Д.</h2>
      <h2>{new Date().toLocaleDateString()}</h2>
      <SortTable />
    </>
  );
}

export default FirstPage;
